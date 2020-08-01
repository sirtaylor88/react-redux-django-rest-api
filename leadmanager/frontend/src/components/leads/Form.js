import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types' // snippet shortcut: impt than TAB
import { addLead } from '../../actions/leads'

export class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  state = {
    name: "",
    email: "",
    message: ""
  }

  onChange = ev => this.setState({ [ev.target.name]: ev.target.value })
  onSubmit = ev => {
    ev.preventDefault()
    const { name, email, message } = this.state
    const lead = { name, email, message }
    this.props.addLead(lead)
    // Clear form after submit
    this.setState({
      name: "",
      email: "",
      messages: ""
    })
  }

  render() {
    const { name, email, message } = this.state

    return (
      <div className="card card-body my-4">
        <h2>Add Lead Form</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control"
                   type="text"
                   name="name"
                   onChange={this.onChange}
                   value={name} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control"
                   type="email"
                   name="email"
                   onChange={this.onChange}
                   value={email} />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control"
                      type="text"
                      name="message"
                      onChange={this.onChange}
                      value={message} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addLead })(Form)
