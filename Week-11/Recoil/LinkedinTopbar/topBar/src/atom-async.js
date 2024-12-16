import { atom, selector } from "recoil";
import axios from "axios";
export const linkedinAtom = atom({
  key: "linkedinAtom",
  default: selector({
    key: "linkedinSelector",
    get: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.get(
        "https://mocki.io/v1/33c639e7-285e-4a43-b243-430af27e50cd"
      );
      return response.data.data;
    },
  }),
});
