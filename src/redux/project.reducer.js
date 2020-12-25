import { GET_PROJECTS, POST_PROJECT } from './../utils/constants';
const INITIAL_STATE = {
  projects: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      console.log(action.data, state.projects);
      return Object.assign({}, state, { projects: [...action.data] })
      break;
    case POST_PROJECT:
      let projects = [...state.projects];
      console.log("##### ", state, projects);
      projects.push(action.data)
      console.log(action.data);
      return Object.assign({}, state, { projects: [...projects] })
    default:
      break;
  }
  return state;
}
export default reducer;