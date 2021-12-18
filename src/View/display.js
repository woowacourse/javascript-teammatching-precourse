import { COURSE_PAGE } from "../constants.js";
import { getStorage } from "../utils/storage.js"

export const displayAddCrew = () => {
    const matcher = getStorage();
    let index = 1;

    const $table = document.getElementById(COURSE_PAGE.CREW_TABLE);
    for(let crew in matcher.crews){
        console.log(matcher.crews[crew]);

        const crewTr = 
        `<tr>
            <td>${index}</td>
            <td>${matcher.crews[crew].name}</td>
            <td>
                <button>삭제</button>
            </td>
        </tr>`;
        $table.insertAdjacentHTML('beforeend', crewTr);
        index++;
    }
}