import { fetchHtmlView } from './fetch.js';

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
        "crew-tab"() {onCrewTabClick();},
        "team-tab"() {onTeamTabClick();},
    };
    if(Object.keys(handlers).includes(e.target.id)) handlers[e.target.id]();
}

const app = document.querySelector("#app");

renderView('tab.html');
app.addEventListener('click', eventHandler);