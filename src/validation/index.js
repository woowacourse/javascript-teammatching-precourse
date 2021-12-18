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

const isOnlyString = (value) => value.match(/\d+/g) === null;

const isNumber = (value) => Number(value) || Number(value) === 0;

const isNaturalNumber = (value) => value > 0;

export const checkCrewName = createCheckEveryFunction([
    createValidFunction(isRequired, '크루 이름을 입력해주세요.'),
    createValidFunction(isLessThanFive, '5자 이하로 설정해주세요.'),
    createValidFunction(isDense, '공백이 있으면 안됩니다.'),
    createValidFunction(isOnlyString, '숫자가 있으면 안됩니다.'),
]);

export const checkTeamMemberCount = createCheckEveryFunction([
    createValidFunction(isRequired, '1팀당 인원수를 입력해주세요.'),
    createValidFunction(isNumber, '숫자를 입력해주세요.'),
    createValidFunction(isNaturalNumber, '자연수를 입력해주세요.'),
]);
