import showMain from "./ShowMain.js";
import MenuButtonController from "./MenuButtonController.js";
export default class App {
    constructor() {
        showMain();
        MenuButtonController.menuButtonEvent();

    }
}