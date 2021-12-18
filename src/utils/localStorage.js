import Course from '../components/course.js';

export const setStateToLocalStorage = (state) => {
  setLocalStorage('front', state.front);
  setLocalStorage('back', state.back);
  setLocalStorage('mission', state.mission);
  setLocalStorage('course', state.course);
};

export const getStateFromLocalStorage = () => {
  const front = getLocalStorage('front') || new Course();
  const back = getLocalStorage('back') || new Course();
  const mission = getLocalStorage('mission') || [];
  const course = getLocalStorage('course') || '';
  return { front, back, mission, course };
};

const setLocalStorage = (key, item) => {
  return localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
