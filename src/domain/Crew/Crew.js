class Crew {
    list = [];

    constructor() {
    }

    addCrew(name) {
        this.list.push(name);
        //console.log(this.list);
    }

    deleteCrew(index) {
        this.list.splice(index, 1);
        //console.log(this.list);
    }

    getCrewList() {
        return this.list;
    }
}

export default Crew;
