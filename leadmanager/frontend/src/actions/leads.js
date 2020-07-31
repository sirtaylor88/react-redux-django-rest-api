import axios from 'axios'

import { GET_LEADS, DELETE_LEAD } from './types'

// Events management

// GET LEADS
export const getLeads = () => dispatch => { // nested function possible by using module "thunk"
  axios
    .get('api/leads/')
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    }).catch(err => console.log(err))
}

// DELETE LEADS
export const deleteLead = (id) => dispatch => { // nested function possible by using module "thunk"
  axios
    .delete(`api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    }).catch(err => console.log(err))
}
