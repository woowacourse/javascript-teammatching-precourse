import { getTeamOnCourse, saveTeamOnCourse, destroyTeamOnCourse } from '../../model/index.js';

export default class Team {
    getTeam(mission) {
        return getTeamOnCourse(this.keyOfTeam, mission);
    }

    saveTeam(mission, team) {
        saveTeamOnCourse(this.keyOfTeam, mission, team);
    }

    destroyTeam(mission) {
        destroyTeamOnCourse(this.keyOfTeam, mission);
    }
}
