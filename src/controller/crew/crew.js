import { $, $$ } from '../../util/index.js';
import { checkCrewName } from '../../validation/index.js';
import { addCrewOnCourse, isUniqueCrewNameOnCourse, getCrewsOnCourse } from '../../model/index.js';

export const triggerSelectCourse = () => {
    $('#frontend-course').addEventListener('click', () => {
        $('#crew-section').classList.add('on');
        $$('.course-title').forEach((courseTitle) => {
            courseTitle.innerText = '프론트';
        });
    });
    $('#backend-course').addEventListener('click', () => {
        $('#crew-section').classList.add('on');
        $$('.course-title').forEach((courseTitle) => {
            courseTitle.innerText = '백';
        });
    });
};

const addCrewToCourse = (crewName) => {
    if ($('#frontend-course').checked) {
        addCrewOnCourse('frontCrews', crewName);
    } else {
        addCrewOnCourse('backCrews', crewName);
    }
};

const renderCrewTable = () => {
    $('#crew-table-tbody').innerHTML = getCrewsOnCourse(
        $('#frontend-course').checked ? 'frontCrews' : 'backCrews',
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
    $('#frontend-course').checked
        ? isUniqueCrewNameOnCourse('frontCrews', crewName)
        : isUniqueCrewNameOnCourse('backCrews', crewName);

const checkUniqueCrewName = (crewName) => {
    if (!isUniqueCrewNameOfCourse(crewName)) {
        alert('이미 같은 이름의 크루가 있습니다.');
        return false;
    }

    return true;
};

$('#add-crew-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const crewName = $('#crew-name-input').value;

    if (checkCrewName(crewName) && checkUniqueCrewName(crewName)) {
        addCrewToCourse(crewName);
        renderCrewTable();
    }
});
