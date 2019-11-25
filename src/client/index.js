import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from 'client/utils/apolloClient'
import GlobalStyle from 'client/components/GlobalStyle'
import App from './App'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
)
