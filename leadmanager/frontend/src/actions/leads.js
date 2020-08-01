import axios from 'axios'

import { createMessage } from './messages'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'

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
      dispatch(createMessage({ deleteLead: "Lead Deleted" }))
      dispatch({
        type: DELETE_LEAD,
        payload: id
      })
    }).catch(err => console.log(err))
}

// ADD LEADS
export const addLead = (lead) => dispatch => { // nested function possible by using module "thunk"
  axios
    .post(`api/leads/`, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    }).catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    })
}
