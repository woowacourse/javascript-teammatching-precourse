import showMain from "./ShowMain.js";
import MenuButtonController from "./MenuButtonController.js";
import CrewEvent from "./CrewEvent.js";
export default class App {
    constructor() {
        showMain();
        MenuButtonController.menuButtonEvent();
        CrewEvent.addEvent();
        CrewEvent.deleteEvent();


    }
}