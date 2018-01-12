import axios from './axios'
import API from './API'

const throwError = e => {
  throw e
}
const deliverResponse = data=>{
  if (data.status===200){
    return data.data
  }else {
    throw new Error(data.message)
  }
}

export default {
  login(userInfo) {
    return axios.post(API.login, userInfo).then(deliverResponse,throwError)
  },
  logout(){
    return axios.post(API.logout).then(deliverResponse,throwError)
  }
}
