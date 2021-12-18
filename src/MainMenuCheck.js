export default class MainMenuCheck {
    static checkFirstMenu(targetId) {
        if(targetId === 'crew-tab') {
            console.log("크루");
        }
    }

    static checkSecondMenu(targetId) {
        if(targetId === 'team-tab') {
            console.log("팀");
        }
    }
}