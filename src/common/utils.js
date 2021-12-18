const { shuffle } = MissionUtils.Random;

export const $ = (selector, target = document) => target.querySelector(selector);
export const $all = (selector, target = document) => new Array(...target.querySelectorAll(selector));

export const getUID = (function () {
    let id = 0;
    return function () {
        return id++;
    };
})();

export const shuffleArray = (arr) => {
    const sequence = shuffle(new Array(arr.length).fill(0).map((item, idx) => idx));

    return arr.map((item, idx) => arr[sequence[idx]]);
};

export const matchTeam = (_members, number) => {
    const members = shuffleArray(_members);
    const teams = [];

    while (members.length >= number) {
        teams.push(members.splice(0, number));
    }

    members.forEach((member, idx) => teams[idx % teams.length].push(member));

    return teams;
};
