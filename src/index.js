import { fetchHtmlView } from './fetch.js';


let crewList = [{name: '준', course: '프론트엔드'}];
let selectedCourse = 'frontend';

function onCourseRadioClick(e) {
    selectedCourse = e.target.value;
}

function onAddCrewClick() {
    const newCrewName = document.querySelector("#crew-name-input").value;
    if(checkCrewInput(newCrewName)) console.log('hihi');

}

function checkCrewInput(name) {
    return !isSameName(name.trim()) && name.trim().length <= 5 && name.trim().length >= 1; 
}

function isSameName(name) {
    return crewList.filter(crew => crew.name === name).length;
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
        "add-crew-buttton"() { onAddCrewClick(); }
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
}

const app = document.querySelector("#app");

renderView('tab.html');
app.addEventListener('click', eventHandler);