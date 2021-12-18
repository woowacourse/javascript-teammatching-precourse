import { EMPTY, ERROR_MESSAGE } from "./constant.js";
import { getLocalStorage } from "./localStorage.js";

const checkIsNaN = (value) => {
    return !isNaN(Number(value));
};
const checkDuplicate = (value, names) => {
    return names.includes(value);
};

const checkIsEmpty = (value) => {
    return value === EMPTY ? true : false;
};

const overLength = (value) => {
    return value.length > 5 ? true : false;
};

const overZero = (value) => {
    return Number(value) > 0 ? true : false;
};

const showAlert = (mseeage) => {
    alert(mseeage);
    return EMPTY;
};

export const checkNumber = (value) => {
    if (!checkIsNaN(value)) {
        showAlert(ERROR_MESSAGE.IS_NUM);
        return EMPTY;
    } else if (!overZero(value)) {
        showAlert(ERROR_MESSAGE.OVER_ZERO);
        return EMPTY;
    } else if (checkIsEmpty(value)) {
        showAlert(ERROR_MESSAGE.IS_EMPTY);
        return EMPTY;
    }
};

export const checkCrewDuplicate = (value, storage) => {
    if (checkIsEmpty(value)) {
        showAlert(ERROR_MESSAGE.IS_EMPTY);
        return EMPTY;
    } else if (overLength(value)) {
        showAlert(ERROR_MESSAGE.OVER_LENGTH);
        return EMPTY;
    }
    const loadData = getLocalStorage(storage);
    if (loadData !== EMPTY) {
        const parse = JSON.parse(loadData);
        const names = [];
        parse.forEach((element) => {
            names.push(element.name);
        });
        if (!checkDuplicate(value, names)) return value;
        else showAlert(ERROR_MESSAGE.SAME_NAME);
    } else {
        return value;
    }
};
