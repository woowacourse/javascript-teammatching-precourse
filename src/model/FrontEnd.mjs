import { setUserLocalStorage } from '../util/localStorage.mjs';

export default class FrontEnd {
  constructor() {
    this.crew = localStorage.getItem('FrontEndUser')?.split(',') ?? [];
  }

  setCrew(crew) {
    this.crew = [...this.crew, crew];
    setUserLocalStorage('FrontEndUser', this.crew);
  }

  getCrew() {
    return this.crew;
  }

  deleteCrew(deleteCrew) {
    this.crew = this.crew.filter(crew => crew !== deleteCrew);
    setUserLocalStorage('FrontEndUser', this.crew);
  }
}
