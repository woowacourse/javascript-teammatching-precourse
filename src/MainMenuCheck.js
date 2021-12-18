import CrewView from "./CrewView.js";

export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if(targetId === 'crew-tab') {
            CrewView.render();
        }
    }

    static checkSecondMenu(targetId) {
        if(targetId === 'team-tab') {
            console.log("팀");
        }
    }
}