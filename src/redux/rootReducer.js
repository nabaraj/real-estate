import { combineReducers } from 'redux';
import projectReducer from './project.reducer';

console.log(projectReducer);

const rootReducer = combineReducers({
  projectReducer: projectReducer
});

export default rootReducer;