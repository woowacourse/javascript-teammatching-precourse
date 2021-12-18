/* eslint-disable no-undef */
export default class TeamManager {
  constructor() {
    this.teams = {};
  }

  createTeam(courseId, missionId, numPerGroup, crews) {
    if (!(courseId + missionId in this.teams)) {
      this.teams[courseId + missionId] = {};
    }
    this.teams[courseId + missionId][numPerGroup] = this.#getRandomAssignment(
      numPerGroup,
      crews
    );
    return this.teams[courseId + missionId][numPerGroup];
  }

  getTeam(courseId, missionId, numPerGroup, crews) {
    const key = courseId + missionId;
    if (key in this.teams && numPerGroup in this.teams[key]) {
      return this.teams[courseId + missionId][numPerGroup];
    }
    return this.createTeam(courseId, missionId, numPerGroup, crews);
  }

  #getRandomAssignment(numPerGroup, crews) {
    const arrSize = Math.ceil(crews.length / numPerGroup);
    const arrCrew = this.#getInitArray(arrSize);
    const shuffled = MissionUtils.Random.shuffle(crews);
    for (let i = 0; i < crews.length; i += 1) {
      arrCrew[i % arrSize].push(shuffled[i]);
    }
    return arrCrew;
  }

  resetTeam(courseId, missionId) {
    const key = courseId + missionId;
    this.teams[key] = {};
  }

  #getInitArray(size) {
    const arr = [];
    for (let i = 0; i < size; i += 1) {
      arr.push([]);
    }
    return arr;
  }
}
