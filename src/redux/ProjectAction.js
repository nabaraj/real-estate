import requestApi from './../utils/service';
import { GET_PROJECTS, POST_PROJECT } from './../utils/constants';
import axios from 'axios';
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
export function postProject(newObject) {
  return function (dispatch) {
    console.log("$$$$ ", newObject);
    let requestObject = {
      url: 'http://localhost:3000/items/',
      data: newObject,
      method: 'POST'
    }
    // axios(requestObject).then(res => {
    //   console.log(res.data);
    // })
    requestApi.post('http://localhost:3000/items/', { newObject }).then(res => {
      console.log(res.data);
      dispatch({ type: POST_PROJECT, data: res.data })
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