import { INITIAL_DATA, KEY } from './constants/storage.js';

const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getData = (key) => JSON.parse(localStorage.getItem(key));

const getCrew = () => {
  const crew = getData(KEY.CREW);
  return crew || INITIAL_DATA.CREW;
};

export default class Storage {
  constructor() {
    this.crew = getCrew();
  }

  setCrew(data) {
    setData(KEY.CREW, data);
    this.crew = data;
  }

  addCrew(course, crewToAdd) {
    const newCrew = this.crew;
    if (this.crew[course] === undefined) {
      newCrew[course] = [crewToAdd];
    } else {
      newCrew[course].push(crewToAdd);
    }
    this.setCrew(newCrew);
  }

  deleteCrew(course, crewToDelete) {
    const newCrewOnCourse = this.crew[course].filter((name) => name !== crewToDelete);
    const newCrew = this.crew;
    newCrew[course] = newCrewOnCourse;
    this.setCrew(newCrew);
  }
}
