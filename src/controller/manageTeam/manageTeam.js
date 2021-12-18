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

const renderBySection = (section) => {
    $('#team-section').classList.remove('match');
    $('#team-section').classList.remove('result');
    $('#team-section').classList.add(section);
};

const renderCrewList = () => {
    $('#crew-list').innerHTML = createCrew()
        .getCrews()
        .reduce((m, crewName) => `${m}<li>${crewName}</li>`, '');
};

const renderTeam = (team) => {
    renderBySection('result');
    $('#team-match-result').innerHTML = team.reduce(
        (m, members) => `${m}<li>${members.join(',')}</li>`,
        '',
    );
};

const renderMatch = () => {
    renderBySection('match');
    renderCrewList();
};

const makeResultForm = (crewsCount, teamMemberCount) => {
    const result = [];
    let count = crewsCount;

    while (teamMemberCount <= count) {
        result.push(teamMemberCount);
        count -= teamMemberCount;
    }

    for (let i = 0; i < count; i += 1) {
        result[i] += 1;
    }

    return result;
};

const getShuffledTeam = (teamMemberCount) => {
    const crews = createCrew().getCrews();
    const randoms = MissionUtils.Random.shuffle([...Array(crews.length)].map((v, i) => i));
    return MissionUtils.Random.shuffle(makeResultForm(crews.length, teamMemberCount)).map((count) =>
        randoms.splice(0, count).map((idx) => crews[idx]),
    );
};

export const triggerShowTeam = () => {
    $('#show-team-matcher-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (isExistTeam()) {
            renderTeam(getTeam());
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
            const team = getShuffledTeam(Number(teamMemberCount));
            renderTeam(team);
            createTeam().saveTeam($('#mission-select').value, team);
        }
    });
};

export const triggerRematchTeam = () => {
    $('#rematch-team-button').addEventListener('click', () => {
        createTeam().destroyTeam($('#mission-select').value);
        renderMatch();
    });
};
