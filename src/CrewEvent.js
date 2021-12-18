import CrewCheck from "./CrewCheck.js";
export default class CrewEvent {
    static addEvent() {
        this.addCrewEvent();
    }

    static addCrewEvent() {
        document.getElementById('add-crew-buttton').addEventListener('click', (e) => {
            e.preventDefault();

            const name = document.getElementById("crew-name-input").value;

            console.log(name);
        })
    }
}