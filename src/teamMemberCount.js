import { CREW } from './util/constant.js';

function checkCourse(i, $courseSelect) {
    if ($courseSelect.options[i].selected === true) {
        console.log($courseSelect.options[i].name)
        if ($courseSelect.options[i].name === '프론트엔드')
            CREW.COURSE = $courseSelect.options[i].name
        else if ($courseSelect.options[i].name === '백엔드')
            CREW.COURSE = $courseSelect.options[i].name
    }
}

export function teamMemberCount() {
    const $courseSelect = document.querySelector('#course-select')
    for (let i = 0; i < $courseSelect.options.length; i++) {

        checkCourse(i, $courseSelect)

    }
    const $teamTabInputBox = document.querySelector('#team-tab-input-box')
    $teamTabInputBox.classList.remove('hide')

    const $matchTeamButton = document.querySelector('#match-team-button')
    $matchTeamButton.addEventListener('click', function () {
        const $teamMemberCountInput = document.querySelector('#team-member-count-input');
        CREW.TEAMCOUNT = $teamMemberCountInput.value

        console.log($teamMemberCountInput.value)
    })
}
