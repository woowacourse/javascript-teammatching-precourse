import CrewCheck from "./CrewCheck.js";
export default class CrewEvent {
    static addEvent() {
        this.addCrewEvent();
    }

    static addCrewEvent() {
        document.getElementById('add-crew-buttton').addEventListener('click', (e) => {
            e.preventDefault();

            const name = document.getElementById("crew-name-input").value;
            const crewCheck = new CrewCheck(name);

            if(crewCheck.checkAll()) {
                //이름 저장
                console.log(name);
            } else {
                alert("유효하지 않은 입력입니다!"); // 상수로 변경
            }

            this.getCourse();

            
        })
    }

    static getCourse() {
        const courseLength = document.getElementsByName("course").length;
        let courseType = "";

        for (let i = 0; i < courseLength; i++) {
            if (document.getElementsByName("course")[i].checked === true) {
                courseType = document.getElementsByName("course")[i].value;
                console.log(courseType);
                break;
            }
        }
    }
}