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
        })
    }
}