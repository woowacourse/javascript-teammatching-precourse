import { courses } from '../data/course.js';
import { missions } from '../data/mission.js';

export default class TeamMatching {
  constructor() {
    this.courses = courses;
    this.missions = missions;
    this.crews = [];
  }
}
