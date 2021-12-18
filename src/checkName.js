import { $crewNameInput } from "./htmlConst.js";

export const checkNameNull = input => {
    if (input === '') return alert('이름을 입력하세요.')
    $crewNameInput.value = '';
    return true;
}

export const checkNameLength = input => {
    if (input.length > 5) return alert('5자 이내로 작성해주세요.')
    $crewNameInput.value = '';
    return true;
}
export const checkDuplicate = (nameInput, courseNameInput) => {
    let tmpNameList = [];
    tmpNameList = JSON.parse(localStorage.getItem(`${courseNameInput}`))
    if (tmpNameList === null) return true;
    for (let i = 0; i < tmpNameList.length; i++) {
        if (nameInput == tmpNameList[i]) return alert('중복된 이름입니다.')
        $crewNameInput.value = '';
    }
    return true;
}