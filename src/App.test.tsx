import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import './index.css'
import App from './App'
import { setContext } from '@apollo/client/link/context'
import React from 'react'
import { store } from './state/index'
import { Provider } from 'react-redux'

const token = process.env.REACT_APP_TOKEN

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : null,
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: 'https://api.github.com/graphql' })
  ),
  cache: new InMemoryCache(),
})

const GetGud = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App repositoriesPerPage={4} />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  )
}

describe('rendering tests', () => {
  test('when loading, main components are rendered correctly', async () => {
    const { unmount } = render(
      <GetGud />
    )
    const navBar = screen.getByTestId('navbar')
    const loadingNotification = screen.getByTestId('notification-loading')
    const fullname = screen.getByTestId('side-bar-user-fullname')
    const login = screen.getByTestId('side-bar-user-login')
    const bio = screen.getByTestId('side-bar-user-bio')
    const socials = screen.getByTestId('side-bar-user-socials')
    expect(navBar).toHaveTextContent('GetGud')
    expect(navBar).toHaveTextContent('Showcasing Repositories, Made Simpler')
    expect(loadingNotification).toHaveTextContent('Loading...')
    expect(fullname).toHaveTextContent('Loading...')
    expect(login).toHaveTextContent('Loading...')
    expect(bio).toHaveTextContent('Loading...')
    expect(socials).toHaveTextContent('0 followers')
    expect(socials).toHaveTextContent('0 following')
    unmount()
  })
})

