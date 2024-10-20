const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, 'users.json');
const usersDataDir = path.join(__dirname, 'usersData');
app.use(express.json());

function ensureUsersDataDirExists()
{
    if (!fs.existsSync(usersDataDir)) {
        fs.mkdirSync(usersDataDir);
    }
}


function readJsonFile(filePath)
{
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data ? JSON.parse(data) : []);
        });
    });
}


function writeJsonFile(filePath,data)
{
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

function findUserIndex(users,username)
{
    return users.findIndex(user => user.name === username);
}
;

// Route for displaying name of the app
app.get('/', (req, res) => {
    res.status(200).send("<center><h1>Multi User To Do App!</h1></center>");
});

// Route for displaying the current list of users
app.get('/users', async function(req, res)  {
    try {
        const users = await readJsonFile(usersPath);
        if (users.length === 0) {
            return res.status(200).send("<center><h1>Empty List (Currently No Users)!</h1></center>");
        }

        const renderData = users.map(user => `${user.name}<br><br>`).join('');
        res.status(200).send(`<center><h1>List of Users!</h1><br><br>${renderData}</center>`);
    } catch (err) {
        res.status(500).send('Unable to retrieve list of users!');
    }
});

// Route to create a new user
app.post('/create-user', async function(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Please provide your username to register!" });
    }

    ensureUsersDataDirExists();

    try {
        const users = await readJsonFile(usersPath);
        const userIndex = findUserIndex(users, req.body.name);

        if (userIndex >= 0) {
            return res.status(409).json({ error: `User with name ${req.body.name} already exists, please choose a different name.` });
        }

        const newUser = { name: req.body.name };
        users.push(newUser);

        await writeJsonFile(usersPath, users);
        const userFilePath = path.join(usersDataDir, `${req.body.name}.json`);
        fs.writeFileSync(userFilePath, '');

        res.status(201).json({ message: `User ${req.body.name} created successfully!` });
    } catch (err) {
        res.status(500).json({ error: 'Error creating the user.' });
    }
});

// Route to delete a user
app.delete('/delete-user/:username', async (req, res) => {
    try {
        const users = await readJsonFile(usersPath);
        const userIndex = findUserIndex(users, req.params.username);

        if (userIndex < 0) {
            return res.status(404).json({ error: `No user found with the username ${req.params.username}.` });
        }

        const userFilePath = path.join(usersDataDir, `${req.params.username}.json`);
        users.splice(userIndex, 1);

        fs.unlinkSync(userFilePath);
        await writeJsonFile(usersPath, users);

        res.status(200).json({ message: `User ${req.params.username} deleted successfully!` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting the user.' });
    }
});

// Middleware to validate user existence
async function validateUserMiddleware(req, res, next){
    try {
        const users = await readJsonFile(usersPath);
        const userIndex = findUserIndex(users, req.params.username);

        if (userIndex < 0) {
            return res.status(404).json({ error: `No user found with the username ${req.params.username}.` });
        }

        req.userIndex = userIndex;
        next();
    } catch (err) {
        res.status(500).json({ error: 'Error validating the user.' });
    }
};

// Route to retrieve list of todos for a specific user
app.get('/retrieve-todos/:username', validateUserMiddleware, async (req, res) => {
    try {
        const filePath = path.join(usersDataDir, `${req.params.username}.json`);
        const todos = await readJsonFile(filePath);

        if (todos.length === 0) {
            return res.status(200).send("<center><h1>Empty To-do List!</h1></center>");
        }

        const renderData = todos.map(todo => `${todo.id}. ${todo.title}<br><br>`).join('');
        res.status(200).send(`<center><h1>Todo List!</h1><br><br>${renderData}</center>`);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving the todos.' });
    }
});

// Route to create a todo for a specific user
app.post('/create-todo/:username', validateUserMiddleware, async (req, res) => {
    if (!req.body.description || !req.body.id) {
        return res.status(400).json({ error: "Can't add an empty todo!" });
    }

    try {
        const filePath = path.join(usersDataDir, `${req.params.username}.json`);
        const todos = await readJsonFile(filePath);

        const todoIndex = todos.findIndex(todo => todo.id === req.body.id);
        if (todoIndex >= 0) {
            return res.status(409).json({ error: `Todo with id ${req.body.id} already exists.` });
        }

        const newTodo = { title: req.body.description, id: req.body.id };
        todos.push(newTodo);

        await writeJsonFile(filePath, todos);
        res.status(201).json({ message: `Todo with id ${req.body.id} created successfully!` });
    } catch (err) {
        res.status(500).json({ error: 'Error creating the todo.' });
    }
});

// Route to update a todo for a specific user
app.put('/update-todo/:username/:idx', validateUserMiddleware, async (req, res) => {
    const idx = parseInt(req.params.idx);

    if (!req.body.title) {
        return res.status(400).json({ error: "Please provide the content to update this todo!" });
    }

    try {
        const filePath = path.join(usersDataDir, `${req.params.username}.json`);
        const todos = await readJsonFile(filePath);

        const todoIndex = todos.findIndex(todo => todo.id === idx);
        if (todoIndex < 0) {
            return res.status(404).json({ error: `No todo found with id ${idx}.` });
        }

        todos[todoIndex].title = req.body.title;
        await writeJsonFile(filePath, todos);

        res.status(200).json({ message: `Todo with id ${idx} updated successfully!` });
    } catch (err) {
        res.status(500).json({ error: 'Error updating the todo.' });
    }
});

// Route to delete a todo for a specific user
app.delete('/delete-todo/:username/:idx', validateUserMiddleware, async (req, res) => {
    const idx = parseInt(req.params.idx, 10);

    try {
        const filePath = path.join(usersDataDir, `${req.params.username}.json`);
        const todos = await readJsonFile(filePath);

        const todoIndex = todos.findIndex(todo => todo.id === idx);
        if (todoIndex < 0) {
            return res.status(404).json({ error: `No todo found with id ${idx}.` });
        }

        todos.splice(todoIndex, 1);
        await writeJsonFile(filePath, todos);

        res.status(200).json({ message: `Todo with id ${idx} deleted successfully!` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting the todo.' });
    }
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
