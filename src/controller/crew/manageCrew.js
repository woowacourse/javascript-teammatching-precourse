import { $ } from '../../util/index.js';
import { checkCrewName } from '../../validation/index.js';
import { addCrewOnCourse, isUniqueCrewNameOnCourse, getCrewsOnCourse } from '../../model/index.js';
import FrontCrew from './FrontCrew.js';
import BackCrew from './BackCrew.js';

const isFrontCourse = () => $('#frontend-course').checked;

const createCrew = (crewName) =>
    isFrontCourse() ? new FrontCrew(crewName) : new BackCrew(crewName);

const selectCourse = (title) => () => {
    $('#crew-section').classList.add('on');
    $('#course-manage-title').innerText = title;
    $('#course-list-title').innerText = title;
};

const triggerSelectCourse = () => {
    $('#frontend-course').addEventListener('click', selectCourse('프론트'));
    $('#backend-course').addEventListener('click', selectCourse('백'));
};

const addCrewToCourse = (crewName) => {
    createCrew(crewName).addCrew();
};

const renderCrewTable = () => {
    $('#crew-table-tbody').innerHTML = getCrewsOnCourse(
        isFrontCourse() ? 'frontCrews' : 'backCrews',
    ).reduce(
        (m, crewName, idx) =>
            `${m}
            <tr>
                <td>${idx + 1}</td>
                <td>${crewName}</td>
                <td>
                <button>삭제</button>
                </td>
            </tr>`,
        '',
    );
};

const isUniqueCrewNameOfCourse = (crewName) =>
    isFrontCourse()
        ? isUniqueCrewNameOnCourse('frontCrews', crewName)
        : isUniqueCrewNameOnCourse('backCrews', crewName);

const checkUniqueCrewName = (crewName) => {
    if (!isUniqueCrewNameOfCourse(crewName)) {
        alert('이미 같은 이름의 크루가 있습니다.');
        return false;
    }

    return true;
};

const triggerAddCrew = () => {
    $('#add-crew-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const crewName = $('#crew-name-input').value;

        if (checkCrewName(crewName) && checkUniqueCrewName(crewName)) {
            addCrewToCourse(crewName);
            renderCrewTable();
        }
    });
};

export { triggerSelectCourse, triggerAddCrew };
