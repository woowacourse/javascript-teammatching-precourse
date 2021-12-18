const createValidFunction = (checkFunction, msg) => (value) => {
    if (!checkFunction(value)) {
        alert(msg);
        return false;
    }

    return true;
};

const createCheckEveryFunction = (checkFunctions) => (value) =>
    checkFunctions.every((checkFunction) => checkFunction(value));

const isRequired = (value) => value !== '';

const isLess = (unit) => (value) => value.length <= unit;

const isLessThanFive = isLess(5);

const isDense = (value) => value.replace(/\s/g, '').length === value.length;

export const checkCrewName = createCheckEveryFunction([
    createValidFunction(isRequired, '크루 이름을 입력해주세요.'),
    createValidFunction(isLessThanFive, '5자 이하로 설정해주세요.'),
    createValidFunction(isDense, '공백이 있으면 안됩니다.'),
]);
