import { $, $$ } from '../util/index.js';
import { checkCrewName } from '../validation/index.js';
import {
    addFronCrew,
    addBackCrew,
    isUniqueFrontCrewName,
    isUniqueBackCrewName,
} from '../model/index.js';

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

const addCrewOnCourse = (crewName) => {
    if ($('#frontend-course').checked) {
        addFronCrew(crewName);
    } else {
        addBackCrew(crewName);
    }
};

const appendCrewOnTable = (crewName) => {
    $('#crew-table-tbody').insertAdjacentHTML(
        'beforeend',
        `
        <tr>
            <td>1</td>
            <td>${crewName}</td>
            <td>
                <button>삭제</button>
            </td>
        </tr>
    `,
    );
};

const isUniqueCrewNameOnCourse = (crewName) =>
    $('#frontend-course').checked
        ? isUniqueFrontCrewName(crewName)
        : isUniqueBackCrewName(crewName);

const checkUniqueCrewName = (crewName) => {
    if (!isUniqueCrewNameOnCourse(crewName)) {
        alert('이미 같은 이름의 크루가 있습니다.');
        return false;
    }

    return true;
};

$('#add-crew-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const crewName = $('#crew-name-input').value;

    if (checkCrewName(crewName) && checkUniqueCrewName(crewName)) {
        addCrewOnCourse(crewName);
        appendCrewOnTable(crewName);
    }
});
