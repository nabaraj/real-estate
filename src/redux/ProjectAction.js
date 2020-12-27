import requestApi from './../utils/service';
import { GET_PROJECTS, POST_PROJECT, PUT_PROJECT } from './../utils/constants';

export function getProject() {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      requestApi.get(process.env.REACT_APP_API_PATH).then(res => {
        dispatch({ type: GET_PROJECTS, data: res.data })
        resolve(res.data);
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }

};
export function putProject(formObject, currentIndex) {
  return async (dispatch) => {
    let putObject = await requestApi.put(`${process.env.REACT_APP_API_PATH}/${formObject.id}`, formObject);
    if (putObject) {
      console.log('updated successfully');
      dispatch({ type: PUT_PROJECT, data: putObject.data, id: formObject.id, currentIndex })
    }
  }
};
export function postProject(newObject) {
  return async (dispatch) => {
    let postObject = await requestApi.post(process.env.REACT_APP_API_PATH, newObject)
    if (postObject) {
      dispatch({ type: POST_PROJECT, data: postObject })
    }
  }
};
export function deleteProject(id) {
  return async (dispatch) => {
    let deleteObject = await requestApi.get(process.env.REACT_APP_API_PATH + id);
    console.log('# ', deleteObject);
  }
}