import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://127.0.0.1:4000/graphql',
  opts: {
    credentials: 'include',
  }
});

const client = new ApolloClient({
  dataIdFromObject : o => o.id,
  networkInterface,
});

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./app/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <MuiThemeProvider>
      <ApolloProvider client={client}>
        <App store={store} routes={routes} />
      </ApolloProvider>
    </MuiThemeProvider>,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './app/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
