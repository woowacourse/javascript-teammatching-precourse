import { $, $$ } from '../util/index.js';
import { checkCrewName } from '../validation/index.js';
import { addFronCrew, addBackCrew } from '../model/index.js';

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

$('#add-crew-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const crewName = $('#crew-name-input').value;

    if (checkCrewName(crewName)) {
        addCrewOnCourse(crewName);
    }
});
