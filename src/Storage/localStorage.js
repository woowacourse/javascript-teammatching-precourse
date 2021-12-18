import { LOACL_STORAGE as LOCAL, EMPTY } from "./constant.js";

export const initialStorageSet = () => {
    [LOCAL.BACKEND_CREW, LOCAL.FRONTEND_CREW, LOCAL.MATCHING_RESULT].forEach(
        (element) => setLocalStorage(element, EMPTY),
    );
};

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const appendLocalStorage = (key, value) => {
    const loadStorage = getLocalStorage(key);
    const arr = [];
    if (loadStorage !== EMPTY) {
        const parse = JSON.parse(loadStorage);
        parse.forEach((element) => arr.push(element));
    }
    arr.push(value);
    setLocalStorage(key, JSON.stringify(arr));
};
