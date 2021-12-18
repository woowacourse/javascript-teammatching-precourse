export default class Crew {
  constructor(name) {
    this.name = name;
  }

  static getCurrentCrewList(course) {
    return JSON.parse(localStorage.getItem(course));
  }

  static setCrewList(course, crewList) {
    localStorage.setItem(course, JSON.stringify(crewList));
  }

  static insertCrew(course, name) {
    const updateCrewList = [...this.getCurrentCrewList(course), new Crew(name)];
    this.setCrewList(course, updateCrewList);
  }
}
