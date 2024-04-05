import axios from 'axios'
import { getAllUsers } from '../slices/usersSlices'

export const getUsers = () => {
  return function (dispatch) {
    axios()
    .then(({data}) => dispatch(getAllUsers(data)))
    .catch(error => console.log(error.message))
  }
}