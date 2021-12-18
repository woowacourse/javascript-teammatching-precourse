import { ELEMENT_SELECTOR } from '../constants/index.js';
import createAction from '../flux/actionCreator.js';

export const UPDATE_ACTIVE_COURSE = 'team-matching/crew-manage/UPDATE_ACTIVE_COURSE';

export const updateActiveCourseAction = (courseId) => {
  return createAction(UPDATE_ACTIVE_COURSE, courseId);
};

const initialState = {
  activeCourseId: ELEMENT_SELECTOR.IDS.CREW_MANAGE.FRONTEND_COURSE_RADIO,
};

const crewManageReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case UPDATE_ACTIVE_COURSE:
      return {
        ...state,
        activeCourseId: data,
      };
    default:
      return { ...state };
  }
};

export default crewManageReducer;
