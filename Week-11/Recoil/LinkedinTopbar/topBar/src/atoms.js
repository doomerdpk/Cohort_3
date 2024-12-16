import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 0,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 102,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 1,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 16,
});

export const sum = selector({
  key: "sum",
  get: ({ get }) => {
    return (
      get(networkAtom) +
      get(jobsAtom) +
      get(messageAtom) +
      get(notificationsAtom)
    );
  },
});
