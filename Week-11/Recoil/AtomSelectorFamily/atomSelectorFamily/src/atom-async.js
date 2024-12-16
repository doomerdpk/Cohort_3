import { atom, atomFamily } from "recoil";
import axios from "axios";

export const TodosAtom = atomFamily({
  key: "TodosAtom",
  default: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new error();

    const response = await axios.get("https://dummyjson.com/todos/" + id);
    return response.data;
  },
});
