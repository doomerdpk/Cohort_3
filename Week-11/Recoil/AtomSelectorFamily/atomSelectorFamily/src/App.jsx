//Use Case: Display all the todos using Recoil.
//Assignment 1: using in memory variable.
//Assignment 2: Fetch the todos from the backend

import { useRecoilValue, RecoilRoot, useRecoilValueLoadable } from "recoil";
import { TodosAtom } from "./atom-async";
import { Suspense } from "react";

//Case 1: Each Todo can be taken as separate atom then we have to create as many atoms as per number of todos.
//Case 2: Dump all the todos in deafult value of a single atom.
//Downside: If any of the todo changes then whole component will be re-rendered containing the atom.
//Optimum case: create separate atom for each todo dynamically

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <Todos id={1} />
          <Todos id={2} />
          <Todos id={2} />
          <Todos id={3} />
          <Todos id={4} />
          <Todos id={3} />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

function Loading() {
  return <div>Loading...</div>;
}

function Todos({ id }) {
  const todo = useRecoilValue(TodosAtom(id));
  // Returns:
  // 1.state: loading, hasValue, hasError
  // 2. contents: actaul contents
  // if (todo.state === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (todo.state === "hasValue") {
  //   return <div>{todo.contents.todo}</div>;
  // }

  // if (todo.state === "hasError") {
  //   return <div>Error loading data!</div>;
  // }

  return <div>{todo.todo}</div>;
}

export default App;
