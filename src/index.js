import { fetchHtmlView } from './fetch.js';
import ManageModel from './model/manage-model.js';
import CrewController from './controller/crew-controller.js';

function onShowTeamClick() {
    const courseSelected = document.querySelector("#course-select").value;
    const missionSelected = document.querySelector("#mission-select").value;

    console.log(courseSelected, missionSelected);
}

async function renderView(fileName) {
    const view = await fetchHtmlView(fileName);
    app.innerHTML = view;
}

function onTeamTabClick() {
    renderView('team-manage.html');
}

function eventHandler(e) {
    e.preventDefault();

    const handlers = {
        "crew-tab"() { crewController.onCrewTabClick(); },
        "team-tab"() { onTeamTabClick(); },
        "frontend-course"() { crewController.onCourseRadioClick(e) },
        "backend-course"() { crewController.onCourseRadioClick(e) },
        "add-crew-buttton"() { crewController.onAddCrewClick(); },
        "delete-crew-buttton"() { crewController.onDeleteCrewClick(e.target); },
        "show-team-matcher-button"() { onShowTeamClick(); },
    };
    const handlerKeys = Object.keys(handlers);
    if(handlerKeys.includes(e.target.id)) handlers[e.target.id]();
    else if(handlerKeys.includes(e.target.className)) handlers[e.target.className]();
}

const app = document.querySelector("#app");

const manageModel = new ManageModel();

const crewController = new CrewController(manageModel, app);

renderView('tab.html')
    .then(_ => {
        app.addEventListener('click', eventHandler);
    });