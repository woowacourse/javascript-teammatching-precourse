import store from '../utils/store.js';

export function Crew(name) {
  this.name = name;
}

export const deleteCrew = (e, course) => {
  const toboDelete = e.target.closest('tr').dataset.crewId;

  if (course === 'front') {
    const frontCrew = store.getLocalStorage('FrontCrew');
    frontCrew.splice(toboDelete, 1);
    store.setLocalStorage('FrontCrew', frontCrew);
  }
  if (course === 'back') {
    const backCrew = store.getLocalStorage('BackCrew');
    backCrew.splice(toboDelete, 1);
    store.setLocalStorage('BackCrew', backCrew);
  }
};
