import { fetchHtmlView } from '../fetch.js';
import TeamView from '../view/team-view.js';

class TeamController {
    constructor(model, app) {
        this.model = model;
        this.view = new TeamView();
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
        this.checkMatchedTeam(courseSelected, missionSelected);
        
    
        const crew = this.filterCrewListByCourse(courseSelected);
    }

    checkMatchedTeam(course, mission) {
        if(this.isMatchedTeam(course, mission)) {
            this.view.renderMatchedResult();
        }
        else {
            this.view.renderNotYetMatched(this.filterCrewListByCourse(course));
        }
    }

    filterCrewListByCourse(course) {
        return this.model.crewList.filter(crew => crew.course === course);
    }

    isMatchedTeam(course, mission) {
        return !!this.filterMatchedTeam(course, mission).length;
    }
    
    filterMatchedTeam(course, mission) {
        return this.model.matchedTeams
            .filter(team => team.course === course)
            .filter(team => team.mission === mission);
    }
}

export default TeamController;