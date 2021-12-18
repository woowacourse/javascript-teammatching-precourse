import manageCrew from "./manageCrew.js";

function selectManageCrewCourse() {
    const templateSelectManageCrew =
        `<main>
            <section>
                <h3>크루를 관리할 코스를 선택해주세요</h3>
                <div>
                    <input id="frontend-course" type="radio" name="course" value="frontend" />
                    <label for="frontend">프론트엔드</label>
                    <input id="backend-course" type="radio" name="course" value="backend" />
                    <label for="backend">백엔드</label>
                </div>
            </section>
        </main>`

    const Main = document.querySelector("main");
    Main.innerHTML = templateSelectManageCrew;
    eventBinding();
}

function eventBinding() {
    document.getElementById("frontend-course").onclick = () => {
        manageCrew("프론트엔드");
    };
    document.getElementById("backend-course").onclick = () => {
        manageCrew("백엔드");
    };
}

export default selectManageCrewCourse;
