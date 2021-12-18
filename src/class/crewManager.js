const getLocalStorageKeyForCrew = (courseID) => `${courseID}-crew`;

export default class CrewManager {
  constructor(courseID) {
    this.crews = [];
    this.courseID = courseID;
    this.#retrieveFromStorage();
  }

  addCrew(name) {
    const isNotInCrewList = !this.crews.includes(name);

    if (isNotInCrewList) {
      this.crews.push(name);
      this.#saveToStorage();
    }
    return isNotInCrewList;
  }

  removeCrew(name) {
    const index = this.crews.indexOf(name);
    if (index !== -1) {
      this.crews.splice(index, 1);
      this.#saveToStorage();
    }
  }

  getCrews() {
    return this.crews;
  }

  #retrieveFromStorage() {
    const retrieved = localStorage.getItem(
      getLocalStorageKeyForCrew(this.courseID)
    );
    if (retrieved !== null) this.crews = JSON.parse(retrieved);
  }

  #saveToStorage() {
    localStorage.setItem(
      getLocalStorageKeyForCrew(this.courseID),
      JSON.stringify(this.crews)
    );
  }
}
