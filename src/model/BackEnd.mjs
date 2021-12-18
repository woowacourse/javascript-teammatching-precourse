import { setUserLocalStorage } from '../util/localStorage.mjs';

export default class BackEnd {
  constructor() {
    this.crew = localStorage.getItem('FrontEndUser')?.split(',') ?? [];
  }

  getCrew(crew) {
    this.crew = [...this.crew, crew];
    setUserLocalStorage('BackEndUser', this.crew);
  }
}
