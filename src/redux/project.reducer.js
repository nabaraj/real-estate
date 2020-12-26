import { GET_PROJECTS, POST_PROJECT } from './../utils/constants';
const INITIAL_STATE = {
  projects: 'loading',
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      let project = [...action.data];
      return Object.assign({}, state, { projects: project })
      break;
    case POST_PROJECT:
      let projects = [...state.projects];
      projects.push(action.data);
      return Object.assign({}, state, { projects: [...projects] })
    default:
      break;
  }
  return state;
}
export default reducer;