//Counter Variable for adding the ID's
let ctr=1;

//function for deleting an element
function deleteToDo(index)
{
    const element=document.getElementById(index);
    element.parentNode.removeChild(element);
}

//function for editing an element
function EditToDo(index)
{
    const element = document.getElementById(index);
    element.setAttribute("contenteditable", "true");
    element.style.outline = "none"; // Remove the default focus outline
    element.style.border = "none";  // Remove the border (if any)
    element.focus();
}

//function for saving the edited element
function SaveToDo(index)
{
    const element = document.getElementById(index);
    element.removeAttribute("contenteditable");
}


//function to add element in the to-do list
function addTodo()
{
    //Reading the Value entered in the input box
    let input_value=document.querySelector("input").value.trim();

    if(input_value==="")
    {
        alert('Add a Todo First!');
        return;
    }

    const itemHTML = `
    <div style="margin-left: 25rem; margin-bottom: 0.625rem;" id="${ctr}">
        <div>
        <h4>${input_value}</h4>
        </div>
        <div>

        <button style="margin-left: 0.625rem; height:1.875rem; background-color:white; border:none; border-radius: 4px;"
         onclick="deleteToDo(${ctr})"><img width=25px; src='https://imgs.search.brave.com/s-VgHDbnEwiQ0sxfysp-9twQYvVOKpAckdyrREhJciE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxsLWZyZWUt/ZG93bmxvYWQuY29t/L2ltYWdlcy90aHVt/YmpwZy90cmFzaF9h/bHRfc2lnbl9pY29u/X2ZsYXRfY29udHJh/c3RfYmxhY2tfd2hp/dGVfc3ltbWV0cmlj/X291dGxpbmVfNjky/MTg3My5qcGc'></button>
         
         <button style="margin-left: 0.625rem; height:2rem; background-color:white; border:none; border-radius: 4px;"
         onclick="EditToDo(${ctr})"><img width=25px; src='https://imgs.search.brave.com/gs217nxPES1qeGmClgerV8XPvDJIK9GIarSWJfOy78Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzk3LzIyLzk3/LzM2MF9GXzE5NzIy/OTc4Nl92V0VGcGVR/RU90SWNqdnRLVlJB/eVBQUDkxQU5zNDN1/cS5qcGc'></button>
         
         <button style="margin-left: 0.625rem; height:2rem; background-color:white; border:none; border-radius: 4px;"
         onclick="SaveToDo(${ctr})"><img width=25px; src='https://imgs.search.brave.com/7XQ1dtw0n_LJ_VWObMjTSDIL-obz02Sd0dB_znGDVyA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk0LzU3Lzc0/LzM2MF9GXzY5NDU3/NzQ2MF9MMXlQdjZz/bmZxZk05dzhWT1J5/TnBYRnRhNlEwcFRk/dS5qcGc'></button>

        </div>
    </div>
    `;


    //Creating a new div element with the above value
    //Need to include an Id while creating the elements which will be used while deleting the element
    const textNode=document.createElement("div");
    textNode.innerHTML=itemHTML;
    ctr++;

    //Considering this as a child element, appending this to a parent element
    const parentEl=document.getElementById("div2");
    parentEl.appendChild(textNode);
    
    //Clearing the value in the input box
    document.querySelector("input").value="";
}

function checkEnterKey(event) {
    if (event.key === "Enter") {
        addTodo();
    }
}