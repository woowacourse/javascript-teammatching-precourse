import CrewView from '../view/crew-view.js';
import { INCORRECT_CREW_NAME, CONFIRM_MESSAGE } from '../constants/alert-messages.js';

class CrewController {
    constructor(model, app) {
        this.model = model;
        this.view = new CrewView();
        this.app = app;
    }
    
    onCrewTabClick() {
        this.view.renderCrewView(this.model.crewList, this.app);
    }

    onCourseRadioClick(e) {
        this.model.setSelectedCourse(e);
    }

    onAddCrewClick() {
        const newCrewName = document.querySelector("#crew-name-input").value;
        if(this.checkCrewInput(newCrewName)) {
            this.model.pushCrewToCrewList(newCrewName);
            this.view.renderCrewList(this.model.crewList);
        }
        else alert(INCORRECT_CREW_NAME);
    }

    onDeleteCrewClick(target) {
        if(confirm(CONFIRM_MESSAGE)) {
            this.model.deleteFromCrewList(target);
            this.view.renderCrewList(this.model.crewList);
        }
    }
    
    checkCrewInput(name) {
        return !this.isSameName(name.trim()) && name.trim().length <= 5 && name.trim().length >= 1; 
    }
    
    isSameName(name) {
        return this.model.crewList.filter(crew => crew.name === name).length;
    }
}

export default CrewController;