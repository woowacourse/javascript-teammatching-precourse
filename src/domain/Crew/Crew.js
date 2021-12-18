class Crew {
    list = [];

    constructor() {
    }

    addCrew(name) {
        this.list.push(name);
        console.log(this.list);
    }

    getCrewList() {
        return this.list;
    }
}

export default Crew;
