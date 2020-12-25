import requestApi from './../utils/service';
import { GET_PROJECTS } from './../utils/constants';
export function getProject() {
  return function (dispatch) {
    requestApi.get('http://localhost:3000/items').then(res => {
      console.log("data ", res.data);
      dispatch({ type: GET_PROJECTS, data: res.data })
    }).catch(err => {
      console.log(err);
    })
  }

};
export function putProject() {
  return function (dispatch) {
    requestApi.get('http://localhost:3000/items').then(res => {
      console.log("data ", res.data);
      dispatch({ type: GET_PROJECTS, data: res.data })
    }).catch(err => {
      console.log(err);
    })
  }
};
export function deleteProject(id) {
  return async (dispatch) => {
    let deleteObject = await requestApi.get('http://localhost:3000/items/' + id);
    console.log('# ', deleteObject);
  }
}