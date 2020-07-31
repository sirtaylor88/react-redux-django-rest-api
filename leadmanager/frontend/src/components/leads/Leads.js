import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'

export class Leads extends Component {
  // add state attributes and functions as prop types
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  }

  // Get data from GET request response
  componentDidMount() {
    this.props.getLeads()
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button onClick={this.props.deleteLead.bind(this, lead.id)}
                          className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}


// Transfer state attributes to Props for component
const mapStateToProps = state => ({
  // the 1st ".leads" is a reducer (declared in combineReducers)
  // the 2nd ".leads" is the state key (declared in initialState)
  leads: state.leads.leads
})

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads)
