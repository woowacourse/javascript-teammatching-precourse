import { WRONG_COUNT } from '../constants/alert-messages.js';
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
    }

    onMatchTeamClick() {
        const memberCount = document.querySelector("#team-member-count-input").value;
        if(this.checkMemberCount(memberCount)) {
            
        }
        else alert(WRONG_COUNT);
    }

    onRematchTeamClick() {
        
    }

    matchTeamByCount(count) {
        const shuffledCrews = this.shuffleCrewList(this.model.crewList)
        
    }

    shuffleCrewList(list) {
        return MissionUtils.Random.shuffle(list);
    }

    checkMemberCount(count) {
        return Number(count) && parseInt(count, 10) >= 1;
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