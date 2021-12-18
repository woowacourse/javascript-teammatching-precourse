import combineReducers from '../flux/combineReducers.js';
import tabPaneReducer from './tabPaneReducer.js';
import crewManageReducer from './crewManageReducer.js';

const rootReducer = combineReducers({
  tabPane: tabPaneReducer,
  crewManage: crewManageReducer,
});

export default rootReducer;
