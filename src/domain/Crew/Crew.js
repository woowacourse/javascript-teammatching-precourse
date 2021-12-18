class Crew {
    list = [];

    constructor() {
    }

    addCrew(name) {
        if(this.list.indexOf(name) === -1) {
            this.list.push(name);
        }
        else {
            alert("중복된 크루 이름입니다.");
        }
    }

    deleteCrew(index) {
        this.list.splice(index, 1);
    }

    getCrewList() {
        return this.list;
    }
}

export default Crew;
