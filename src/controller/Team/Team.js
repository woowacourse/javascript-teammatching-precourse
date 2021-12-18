import { getTeamOnCourse } from '../../model/index.js';

export default class Team {
    getTeam(mission) {
        return getTeamOnCourse(this.keyOfTeam, mission);
    }
}
