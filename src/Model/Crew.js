export default class Crew {
  static instance;

  constructor() {
    if (Crew.instance) return Crew.instance;
    if (localStorage.getItem("crew") == null)
      this.crew = {
        frontEnd: [],
        backEnd: [],
      };
    else this.crew = JSON.parse(localStorage.getItem("crew"));
  }

  compareName(name, kindOfCrew) {
    if (kindOfCrew === 0) {
      this.crew.frontEnd.forEach((feName) => {
        if (feName === name) return false;
      });
      return true;
    }
    this.crew.backEnd.forEach((beName) => {
      if (beName === name) return false;
    });
    return true;
  }

  addNewCrew(name, kindOfCrew) {
    if (kindOfCrew === 0) {
      this.crew.frontEnd.push(name);
      this.addLocalStorage();
      return;
    }
    this.crew.backEnd.push(name);
    this.addLocalStorage();
  }

  deleteCrew(index, kindOfCrew) {
    if (kindOfCrew === 0) {
      this.crew.frontEnd.splice(index, 1);
      this.addLocalStorage();
      return;
    } else this.crew.backEnd.splice(index, 1);
    this.addLocalStorage();
  }

  getCrew(kindOfCrew) {
    console.log(this.crew.frontEnd);
    if (kindOfCrew === 0) return this.crew.frontEnd;
    return this.crew.backEnd;
  }

  addLocalStorage() {
    localStorage.setItem("crew", JSON.stringify(this.crew));
  }
}
