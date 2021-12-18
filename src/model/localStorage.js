import { COURSE } from "../constant/teammatching.js";

const initialSetData = (key, value) => {
  if (localStorage.getItem(key) == null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const setLocalStorage = () => {
  initialSetData(COURSE.FRONTEND, []);
  initialSetData(COURSE.BACKEND, []);
};
