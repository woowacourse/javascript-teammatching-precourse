import data from './data.js';

const CREW_BY_COURSE = () => {
  const initialCrew = {};
  data.course.forEach((item) => {
    initialCrew[item.value] = [];
  });
  return initialCrew;
};

const INITIAL_DATA = {
  CREW: CREW_BY_COURSE(),
};

const KEY = {
  CREW: 'crew',
};

export { INITIAL_DATA, KEY };
