import { fetchHtmlView } from './fetch.js';
import ManageModel from './model/manage-model.js';
import CrewController from './controller/crew-controller.js';
import TeamController from './controller/team-controller.js';

async function renderView(fileName) {
    const view = await fetchHtmlView(fileName);
    app.innerHTML = view;
}

function eventHandler(e) {
    e.preventDefault();

    const handlers = {
        "crew-tab"() { crewController.onCrewTabClick(); },
        "team-tab"() { teamController.onTeamTabClick(); },
        "frontend-course"() { crewController.onCourseRadioClick(e) },
        "backend-course"() { crewController.onCourseRadioClick(e) },
        "add-crew-buttton"() { crewController.onAddCrewClick(); },
        "delete-crew-buttton"() { crewController.onDeleteCrewClick(e.target); },
        "show-team-matcher-button"() { teamController.onShowTeamClick(); },
    };
    const handlerKeys = Object.keys(handlers);
    if(handlerKeys.includes(e.target.id)) handlers[e.target.id]();
    else if(handlerKeys.includes(e.target.className)) handlers[e.target.className]();
}

const app = document.querySelector("#app");

const manageModel = new ManageModel();

const crewController = new CrewController(manageModel, app);
const teamController = new TeamController(manageModel, app);

renderView('tab.html')
    .then(_ => {
        app.addEventListener('click', eventHandler);
    });