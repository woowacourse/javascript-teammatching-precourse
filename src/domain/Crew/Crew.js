class Crew {
    list = [];

    constructor() {
    }

    addCrew(name) {
        this.list.push(name);
    }

    getCrewList() {
        return this.list;
    }
}

export default Crew;
