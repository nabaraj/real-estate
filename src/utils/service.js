import axios from 'axios';


const requestApi = {
  get: function (requestObject) {
    return axios.get(requestObject)
  },
  post: function (requestObject) {
    return axios.post(requestObject)
  },
  put: function (requestObject) {
    return axios.put(requestObject)
  },
  delete: function (requestObject) {
    return axios.delete(requestObject)
  }
}

export default requestApi