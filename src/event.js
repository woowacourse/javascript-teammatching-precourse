import { COURSE_PAGE, CREW_PAGE } from "./constants.js"

export default (controller)=>{
    const $frontPage = document.getElementById(CREW_PAGE.FRONT_PAGE);
    $frontPage.addEventListener('click', e =>{
        e.preventDefault();
        const $addButton = document.getElementById(COURSE_PAGE.ADD_BUTTON);
        const $input = document.getElementById(COURSE_PAGE.CREW_INPUT);
        if(e.target === $addButton){
            controller.addCrew($input.value);
        }
    })
}