import { $frontendCourseRadioButton } from "./htmlConst.js";
export const frontendCrewList = [];
export const backendCrewList = [];
export const pushCrewObject = (courseName, crewName) => {
    console.log(courseName, crewName)
    if (`${courseName}` === $frontendCourseRadioButton.value) {
        frontendCrewList.push(crewName)
        localStorage.setItem(`${courseName}`, JSON.stringify(frontendCrewList))
    }
    else {
        backendCrewList.push(crewName)
        localStorage.setItem(`${courseName}`, JSON.stringify(backendCrewList))
    }
}
