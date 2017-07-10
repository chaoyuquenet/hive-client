import React from 'react'
//import { browserHistory, Router } from 'react-router'
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={hashHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default graphql(query)(App);
