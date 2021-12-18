export const TeamList = function () {
    this.list = [];
    this.teamCount = 0;

    this.getTeamCount = (num) => {
        this.teamCount = parseInt(this.list.length / num) + 1;
    };

    this.getRandomMatch = () => {};
};
