import CrewCheck from "./CrewCheck.js";
import { HTML_OF_CREW_INPUT } from "./utils/html.js";
export default class CrewEvent {
    static addEvent() {
        this.addCrewEvent();
        // this.getCourse();
    }

    // static addRadioEvent() {
    //     const courseLength = document.getElementsByName("course").length;
    //     for (let i = 0; i < courseLength; i++) {
    //         if (document.getElementsByName("course")[i].checked === true) {
    //             courseType = document.getElementsByName("course")[i].value;
    //             console.log(courseType);
    //             break;
    //         }
    //     }
        
    //     document.getElementById
    // }

    static addCrewEvent() {
        document.getElementById('add-crew-buttton').addEventListener('click', (e) => {
            e.preventDefault();

            const name = document.getElementById("crew-name-input").value;
            const crewCheck = new CrewCheck(name);

            if(crewCheck.checkAll()) {
                //이름 저장
                this.storeCrew(name, this.getCourse());
                // this.getCourse();
                console.log(name);
            } else {
                alert("유효하지 않은 입력입니다!"); // 상수로 변경
            }

            

            
        })
    }

    static getCourse() {
        const courseLength = document.getElementsByName("course").length;
        let courseType = "";

        for (let i = 0; i < courseLength; i++) {
            if (document.getElementsByName("course")[i].checked === true) {
                courseType = document.getElementsByName("course")[i].value;
                console.log(courseType);
                return courseType;
            }
        }
    }

    static storeCrew(name, course) {
        const crew = JSON.parse(localStorage.getItem("Crew"));

        if(localStorage.getItem("Crew") === null) {
            localStorage.setItem("Crew", JSON.stringify({ [name]: { course: course}})); // 새로 저장
        } else {
            crew[name] = { course: course}; //중복 체크
            localStorage.setItem("Crew", JSON.stringify(crew));
        }

    }
}