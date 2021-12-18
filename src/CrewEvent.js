import CrewCheck from "./CrewCheck.js";
import CrewView from "./CrewView.js";
import { HTML_OF_CREW_INPUT, HTML_OF_CREW_TABLE } from "./utils/html.js";
export default class CrewEvent {
    static addEvent() {
        this.addFrontEndEvent();
        // this.addCrewEvent();
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
                if(this.getCourse() === "frontend") {
                    this.storeFrontCrew(name, this.getCourse());
                }
                if(this.getCourse() === "backend") {
                    this.storeBackCrew(name, this.getCourse());
                }

                console.log(name);
                CrewView.showFrontTable();
                
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

    static storeFrontCrew(name, course) {
        const crew = JSON.parse(localStorage.getItem("CrewFront"));

        if(localStorage.getItem("CrewFront") === null) {
            localStorage.setItem("CrewFront", JSON.stringify({ [name]: { course: course}})); // 새로 저장
        } else {
            crew[name] = { course: course}; //중복 체크
            localStorage.setItem("CrewFront", JSON.stringify(crew));
        }
    }

    static storeBackCrew(name, course) {
        const crew = JSON.parse(localStorage.getItem("CrewBack"));

        if(localStorage.getItem("CrewBack") === null) {
            localStorage.setItem("CrewBack", JSON.stringify({ [name]: { course: course}})); // 새로 저장
        } else {
            crew[name] = { course: course}; //중복 체크
            localStorage.setItem("CrewBack", JSON.stringify(crew));
        }
    }

       //이거 조금 이상함
    static addFrontEndEvent() {
        document.getElementById('frontend-course').addEventListener('click', (e) => {
            console.log("프론트");
            document.getElementById('app').innerHTML += HTML_OF_CREW_INPUT + HTML_OF_CREW_TABLE;
            // document.getElementsByName('course')[0].prop("checked", true);

            CrewView.showFrontTable();

            this.addCrewEvent();
        })
    }
}