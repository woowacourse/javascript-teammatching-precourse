import combineReducers from '../flux/combineReducers.js';
import tabPaneReducer from './tabPaneReducer.js';

const rootReducer = combineReducers({
  tabPane: tabPaneReducer,
});

export default rootReducer;
