import { atom, atomFamily } from "recoil";

import { Todos } from "./todos";
export const TodosAtom = atomFamily({
  key: "TodosAtom",
  default: (id) => {
    const todo = Todos.find((todo) => todo.id === id);
    return todo;
  },
});
