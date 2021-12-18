import { ELEMENT_SELECTOR } from '../constants/index.js';
import createAction from '../flux/actionCreator.js';

export const UPDATE_ACTIVE_TAB_PANE = 'team-matching/tab-pane/UPDATE_ACTIVE_TAB_PANE';

export const updateActiveTabPaneAction = (tabPaneId) => {
  return createAction(UPDATE_ACTIVE_TAB_PANE, tabPaneId);
};

const initialState = {
  activeTabPaneId: ELEMENT_SELECTOR.IDS.CREW_MANAGE.PANE,
};

const tabPaneReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case UPDATE_ACTIVE_TAB_PANE:
      return {
        ...state,
        activeTabPaneId: data,
      };
    default:
      return { ...state };
  }
};

export default tabPaneReducer;
