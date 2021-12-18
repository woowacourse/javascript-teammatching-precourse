export const TeamList = function () {
    this.list = [];
    this.teamList = [];
    this.crewId = [];
    this.teamPerson = 0;

    this.getTeamCount = (num) => {
        this.teamPerson = num;
        const listNum =
            this.list.length % num === 0
                ? this.list.length / num
                : parseInt(this.list.length / num);
        for (let i = 0; i < listNum; i++) {
            const array = [];
            this.teamList.push(array);
        }
    };

    this.refreshTeamList = () => {
        this.teamList = [];
        this.getTeamCount(this.teamPerson);
    };

    this.getRandomMatch = () => {
        const shuffleList = MissionUtils.Random.shuffle(this.crewId);
        console.log(this.teamList, "@");
        shuffleList.forEach((element, idx) => {
            this.teamList[(idx + 1) % this.teamList.length].push(
                getCrewName(element),
            );
        });
    };

    const getCrewName = (id) => {
        let name = "";
        this.list.forEach((element) => {
            if (element.id === id) name = element.name;
        });
        return name;
    };
};
