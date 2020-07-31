import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js'

const initialState = {
  leads: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_LEADS:
      return {
        ...state, // Any current state
        leads: action.payload // Show on UI
      }
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      }
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload] // Any existing leads + new lead
      }
    default:
      return state
  }
}
