class Crew {
    list = [];

    constructor() {
    }

    addCrew(name, type) {
        if(this.list.indexOf(name) === -1) {
            this.list.push(name);
            this.setLocalStorage(type);
        }
        else {
            alert("중복된 크루 이름입니다.");
        }
    }

    deleteCrew(index, type) {
        this.list.splice(index, 1);
        this.setLocalStorage(type);
    }

    getCrewList() {
        return this.list;
    }

    setLocalStorage(type) {
        if(type === "프론트엔드") {
            localStorage.setItem("frontend", JSON.stringify(this.getCrewList()));
        }
        else {
            localStorage.setItem("backend", JSON.stringify(this.getCrewList()));
        }
    }

    getFromLocalStorage(type) {
        if(type === "프론트엔드") {
            this.list = JSON.parse(localStorage.getItem("frontend")) ?? [];;
        }
        else {
            this.list = JSON.parse(localStorage.getItem("backend")) ?? [];;
        }
    }
}

export default Crew;
