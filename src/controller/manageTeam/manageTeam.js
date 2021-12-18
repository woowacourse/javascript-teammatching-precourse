import { $ } from '../../util/index.js';
import { checkTeamMemberCount } from '../../validation/index.js';
import FrontCrew from '../Crew/FrontCrew.js';
import BackCrew from '../Crew/BackCrew.js';
import FrontTeam from '../Team/FrontTeam.js';
import BackTeam from '../Team/BackTeam.js';

const isFrontCourse = () => $('#course-select').value === 'frontend';

const createCrew = (crewName) =>
    isFrontCourse() ? new FrontCrew(crewName) : new BackCrew(crewName);

const createTeam = (crewName) =>
    isFrontCourse() ? new FrontTeam(crewName) : new BackTeam(crewName);

const isEnableDivideTeam = (teamMemberCount) =>
    2 * teamMemberCount <= createCrew().getCrews().length;

const checkEnableDivideTeam = (teamMemberCount) => {
    if (!isEnableDivideTeam(teamMemberCount)) {
        alert('팀으로 나눌 수 없는 숫자입니다. 더 작게 입력해주세요.');
        return false;
    }

    return true;
};

const getTeam = () => createTeam().getTeam($('#mission-select').value);

const isExistTeam = () => getTeam().length > 0;

const renderTeam = () => {
    $('#team-section').classList.remove('match');
    $('#team-section').classList.add('result');
};

const renderMatch = () => {
    $('#team-section').classList.remove('result');
    $('#team-section').classList.add('match');
};

export const triggerShowTeam = () => {
    $('#show-team-matcher-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (isExistTeam()) {
            renderTeam();
        } else {
            renderMatch();
        }
    });
};

export const triggerMatchTeam = () => {
    $('#match-team-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const teamMemberCount = $('#team-member-count-input').value;

        if (checkTeamMemberCount(teamMemberCount) && checkEnableDivideTeam(teamMemberCount)) {
        }
    });
};
