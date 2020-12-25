import { GET_PROJECTS } from './../utils/constants';
const INITIAL_STATE = {
  projects: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      console.log(action.data, state.projects);
      return Object.assign({}, state, { projects: [...action.data] })
      break;

    default:
      break;
  }
  return state;
}
export default reducer;