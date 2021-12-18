import CrewCheck from "./CrewCheck.js";
import CrewView from "./CrewView.js";
import { HTML_OF_FRONT_CREW_INPUT, HTML_OF_BACK_CREW_INPUT, HTML_OF_CREW_TABLE, HTML_OF_FRONT_CHECKED_RADIO , HTML_OF_HEADER, HTML_OF_TEAM_TAB, HTML_OF_BACK_CHECKED_RADIO} from "./utils/html.js";
export default class CrewEvent {
    static addEvent() {
        this.addRadioEvent();
        
    }
 
    static addCrewEvent() {
        document.getElementById('add-crew-buttton').addEventListener('click', (e) => {
            e.preventDefault();


            const name = document.getElementById("crew-name-input").value;
            // console.log(name);
            const crewCheck = new CrewCheck(name);

            if(crewCheck.checkAll()) {
                // //이름 저장
                if(this.getCourse() === "frontend") {
                    // this.checkFrontName(name);
                    console.log(name);
                    this.storeFrontCrew(name, this.getCourse());
                    CrewView.showFrontTable();
                } else if(this.getCourse() === "backend") {
                    this.storeBackCrew(name, this.getCourse());
                    CrewView.showBackTable();
                }    
            } else {
                alert("유효하지 않은 입력입니다!"); // 상수로 변경
            } 
        })
    }

    // static checkFrontName(name) {
    //     const crew = JSON.parse(localStorage.getItem("CrewFront"));

    //     if(crew[name].course === null) {
    //         return true;
    //     } else {
    //         alert("중복된 이름입니다!");
    //     }

    //     return false;
    // }

    // static checkBackName(name) {
    //     const crew = JSON.parse(localStorage.getItem("CrewBack"));

    //     if(crew[name].course !== "backend") {
    //         return true;
    //     } else {
    //         alert("중복된 이름입니다!");
    //     }

    //     return false;
    // }

    static getCourse() {
        const courseLength = document.getElementsByName("course").length;
        let courseType = "";

        for (let i = 0; i < courseLength; i++) {
            if (document.getElementsByName("course")[i].checked === true) {
                courseType = document.getElementsByName("course")[i].value;
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

    static addRadioEvent() {
        document.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.id;
      
            if(targetId === 'frontend-course') {
                document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_FRONT_CHECKED_RADIO + HTML_OF_FRONT_CREW_INPUT + HTML_OF_CREW_TABLE;

                if(localStorage.getItem("CrewFront") !== null){
                    CrewView.showFrontTable();
                    // this.addCrewEvent();
                } 
                this.addCrewEvent();
            }



            if(targetId === 'backend-course') {
                document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_BACK_CHECKED_RADIO + HTML_OF_BACK_CREW_INPUT + HTML_OF_CREW_TABLE;

                if(localStorage.getItem("CrewBack") !== null){
                    CrewView.showBackTable();
                } 
                this.addCrewEvent();
            }
        });
    }


    static deleteEvent() {
        document.addEventListener('click', (e) => {
            const { idName } = e.target;
            const target = e.target.parentElement.parentElement;

            this.checkIdName(idName, target);
        })
    }

    static checkIdName(idName, target) {
        if (idName === 'delete-crew-buttton') {

            console.log(target.childNodes)
        //   const name = target.childNodes[1].dataset.productName;
        //   const price = target.childNodes[3].dataset.productPrice;
        //   const quantity = target.childNodes[5].dataset.productQuantity;
    
        //   this.purchase(name, price, quantity);
        }
      }
    


}