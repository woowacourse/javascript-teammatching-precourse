import { CREW_PAGE } from "../constants.js";

export default () => {
    const $app = document.querySelector('#app');
    $app.insertAdjacentHTML('beforeend', 
    `<div id=${CREW_PAGE.MAIN} hidden=true>
    <h3> 쿠르를 관리할 코스를 선택해주세요 </h3>
    <div>
        <input type="radio" name="course" value="frontend" />
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" />
        <label for="backend">백엔드</label>
    </div>
    </div>`
    )
}