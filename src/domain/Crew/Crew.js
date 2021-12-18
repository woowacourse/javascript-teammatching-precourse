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

    getNumberList() {
        const numberList = [];
        for(let i = 0; i<this.getCrewList().length; i++) {
            numberList.push(i);
        }
        return numberList;
    }

    convertNumberListToCrewList(numberList) {
        const randomCrewList = [];
        for(let i = 0; i<this.getCrewList().length; i++) {
            randomCrewList.push(this.list[numberList.indexOf(i)]);
        }
        return randomCrewList;
    }

    getMatchedTeam(input) {
        console.log(this.getNumberList());
        const randomNumberList = MissionUtils.Random.shuffle(this.getNumberList());
        const randomCrewList = this.convertNumberListToCrewList(randomNumberList);
        const teamList = [];
        let total = this.getCrewList().length;
        let remainder = total % input;
        let idx = 0;

        while(idx < total) {
            let member = (remainder > 0) ? input + 1 : input;
            remainder--;
            teamList.push(randomCrewList.slice(idx, idx+member));
            idx += member;
        }

        console.log(teamList);
        return teamList;
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
            this.list = JSON.parse(localStorage.getItem("frontend")) ?? [];
        }
        else {
            this.list = JSON.parse(localStorage.getItem("backend")) ?? [];
        }
    }
}

export default Crew;
