import { $ } from '../../util/index.js';
import { checkTeamMemberCount } from '../../validation/index.js';
import FrontCrew from '../Crew/FrontCrew.js';
import BackCrew from '../Crew/BackCrew.js';

const isFrontCourse = () => $('#course-select').value === 'frontend';

const createCrew = (crewName) =>
    isFrontCourse() ? new FrontCrew(crewName) : new BackCrew(crewName);

const isEnableDivideTeam = (teamMemberCount) =>
    2 * teamMemberCount <= createCrew().getCrews().length;

const checkEnableDivideTeam = (teamMemberCount) => {
    if (!isEnableDivideTeam(teamMemberCount)) {
        alert('팀으로 나눌 수 없는 숫자입니다. 더 작게 입력해주세요.');
        return false;
    }

    return true;
};

export const triggerMatchTeam = () => {
    $('#match-team-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const teamMemberCount = $('#team-member-count-input').value;

        if (checkTeamMemberCount(teamMemberCount) && checkEnableDivideTeam(teamMemberCount)) {
        }
    });
};

export const a = 1;
