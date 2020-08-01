import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Alerts from './layout/Alerts'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

import { Provider } from 'react-redux'
import store from '../store'

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            < Header />
            < Alerts />
            <div className="container">
              < Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))
