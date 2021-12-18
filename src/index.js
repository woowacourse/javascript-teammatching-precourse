import { fetchHtmlView } from './fetch.js';
import { INCORRECT_CREW_NAME } from './constants/alert-messages.js';

let crewList = [{name: '준', course: '프론트엔드'}];
let selectedCourse = 'frontend';

function onCourseRadioClick(e) {
    selectedCourse = e.target.value;
}

function onAddCrewClick() {
    const newCrewName = document.querySelector("#crew-name-input").value;
    if(checkCrewInput(newCrewName)) console.log('hihi');
    else alert(INCORRECT_CREW_NAME);
}

function checkCrewInput(name) {
    return !isSameName(name.trim()) && name.trim().length <= 5 && name.trim().length >= 1; 
}

function isSameName(name) {
    return crewList.filter(crew => crew.name === name).length;
}

function onDeleteCrewClick(target) {
    const row = target.parentElement.parentElement;
    renderDeleteRow(row.rowIndex);
}

function renderDeleteRow(rowIndex) {
    const crewTable = document.querySelector("#crew-table");
    crewTable.deleteRow(rowIndex);
}

//
function renderView(fileName) {
    fetchHtmlView(fileName).then(view => app.innerHTML = view);
}

function onCrewTabClick() {
    renderView('crew-manage.html');
}

function onTeamTabClick() {
    renderView('team-manage.html');
}

function eventHandler(e) {
    e.preventDefault();

    const handlers = {
        "crew-tab"() { onCrewTabClick(); },
        "team-tab"() { onTeamTabClick(); },
        "frontend-course"() { onCourseRadioClick(e) },
        "backend-course"() { onCourseRadioClick(e) },
        "add-crew-buttton"() { onAddCrewClick(); },
        "delete-crew-buttton"() { onDeleteCrewClick(e.target); },
    };
    const handlerKeys = Object.keys(handlers);
    if(handlerKeys.includes(e.target.id)) handlers[e.target.id]();
    else if(handlerKeys.includes(e.target.className)) handlers[e.target.className]();
}

const app = document.querySelector("#app");

renderView('tab.html');
app.addEventListener('click', eventHandler);