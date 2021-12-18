import { getLocalStorage, setLocalStorage } from './store.js';

function WoowaCrew() {
  this.frontendCrew = [];
  this.backendCrew = [];

  this.addCrew = (course, crew) => {
    if (course === 'frontend') {
      this.frontendCrew.push(crew);
      setLocalStorage('frontend', this.frontendCrew);
    }
    if (course === 'backend') {
      this.backendCrew.push(crew);
      setLocalStorage('backend', this.backendCrew);
    }
  };

  this.initCrew = (course) => {
    if (course === 'frontend') {
      this.frontendCrew = getLocalStorage(course);
    }
    if (course === 'backend') {
      this.backendCrew = getLocalStorage(course);
    }
  };

  this.getCrew = (course) => {
    if (course === 'frontend') {
      return this.frontendCrew;
    }
    if (course === 'backend') {
      return this.backendCrew;
    }
  };
}

export const woowaCrew = new WoowaCrew();
