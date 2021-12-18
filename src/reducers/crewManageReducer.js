import { ELEMENT_SELECTOR } from '../constants/index.js';
import createAction from '../flux/actionCreator.js';

export const UPDATE_ACTIVE_COURSE = 'team-matching-board/crew-manage/UPDATE_ACTIVE_COURSE';
export const ADD_CREW = 'team-matching-board/crew-manage/ADD_CREW';
export const REMOVE_CREW = 'team-matching-board/crew-manage/REMOVE_CREW';

export const updateActiveCourseAction = (courseId) => {
  return createAction(UPDATE_ACTIVE_COURSE, courseId);
};

export const addCrewAction = (crew) => {
  return createAction(ADD_CREW, crew);
};

export const removeCrewAction = (crew) => {
  return createAction(REMOVE_CREW, crew);
};

const initialState = {
  activeCourseId: ELEMENT_SELECTOR.IDS.CREW_MANAGE.FRONTEND_COURSE_RADIO,
};

// eslint-disable-next-line max-lines-per-function
const crewManageReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case UPDATE_ACTIVE_COURSE:
      return {
        ...state,
        activeCourseId: data,
      };
    case ADD_CREW:
      return {
        ...state,
        crews: [...state.crews, data],
      };
    case REMOVE_CREW: {
      const { name, course } = data;
      return {
        ...state,
        crews: state.crews.filter((crew) => {
          return crew.name !== name || crew.course !== course;
        }),
      };
    }
    default:
      return { ...state };
  }
};

export default crewManageReducer;
