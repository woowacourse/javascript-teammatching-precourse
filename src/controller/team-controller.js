import { fetchHtmlView } from '../fetch.js';

class TeamController {
    constructor(model, app) {
        this.model = model;
        this.app = app;
    }

    async renderView(fileName) {
        const view = await fetchHtmlView(fileName);
        app.innerHTML = view;
    }
    
    onTeamTabClick() {
        this.renderView('team-manage.html');
    }

    onShowTeamClick() {
        const courseSelected = document.querySelector("#course-select").value;
        const missionSelected = document.querySelector("#mission-select").value;
    
        const crew = this.filterCrewListByCourse(courseSelected);
        console.log(crew);
    }

    filterCrewListByCourse(course) {
        return this.model.crewList.filter(crew => crew.course === course);
    }
}

export default TeamController;