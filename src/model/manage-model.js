import Crew from './crew.js';

class ManageModel {
    constructor() {
        this.crewList = [];
        this.selectedCourse = 'frontend';
        this.matchedTeams = [];
    }

    setSelectedCourse(e) {
        this.selectedCourse = e.target.value;
    }

    deleteFromCrewList(target) {
        const index = target.parentElement.parentElement.rowIndex - 1;
        this.crewList.splice(index, 1);
    }

    pushCrewToCrewList(name) {
        this.crewList.push(new Crew(name, this.selectedCourse));
    }
}

export default ManageModel;