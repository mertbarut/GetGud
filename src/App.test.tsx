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

const clientInvalid = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: 'https://api.github.com/grafql' }) // uri is not correct
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

const GetGudInvalid = () => {
  return (
    <React.StrictMode>
      <ApolloProvider client={clientInvalid}>
        <Provider store={store}>
          <App repositoriesPerPage={4} />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  )
}

describe('main components are rendered correctly when...', () => {
  test('loading', async () => {
    const { unmount } = render(
      <GetGud />
    )
    const navBar = screen.getByTestId('navbar')
    const loadingNotification = screen.getByTestId('notification-loading')
    const fullname = screen.getByTestId('side-bar-user-fullname-default')
    const login = screen.getByTestId('side-bar-user-login-default')
    const bio = screen.getByTestId('side-bar-user-bio-default')
    const socials = screen.getByTestId('side-bar-user-socials-default')
    expect(navBar).toHaveTextContent('GetGud')
    expect(navBar).toHaveTextContent('Showcasing Repositories, Made Simpler')
    expect(loadingNotification).toHaveTextContent('Loading...')
    expect(fullname).toHaveTextContent('Loading...')
    expect(login).toHaveTextContent('Loading...')
    expect(bio).toHaveTextContent('Loading...')
    expect(socials).toHaveTextContent('0 followers')
    expect(socials).toHaveTextContent('0 following')
    unmount()
  }),
  test('connection is NOT established', async () => {
    const { unmount } = render(
      <GetGudInvalid />
    )
    const navBar = screen.getByTestId('navbar')
    const errorNotification = await waitFor(() => screen.getByTestId('notification-error'))
    const fullname = screen.getByTestId('side-bar-user-fullname-default')
    const login = screen.getByTestId('side-bar-user-login-default')
    const bio = screen.getByTestId('side-bar-user-bio-default')
    const socials = screen.getByTestId('side-bar-user-socials-default')
    expect(navBar).toHaveTextContent('GetGud')
    expect(navBar).toHaveTextContent('Showcasing Repositories, Made Simpler')
    expect(errorNotification).toHaveTextContent('Error!')
    expect(fullname).toHaveTextContent('Loading...')
    expect(login).toHaveTextContent('Loading...')
    expect(bio).toHaveTextContent('Loading...')
    expect(socials).toHaveTextContent('0 followers')
    expect(socials).toHaveTextContent('0 following')
    unmount()
  }),
  test('connection is established and the github login is "mertbarut"', async () => {
    const { unmount } = render(
      <GetGud />
    )
    const user = {
      avatarUrl: 'https://avatars.githubusercontent.com/u/34005726?u=b42fd6ac34d4e56368c2c46f9e013e85ca545c7c&v=4',
      name: 'Mert',
      login: 'mertbarut',
      bio: 'Pure function enjoyer, ‘any’ eliminator, tree shaker',
      followers: 21,
      following: 19,
    }
    const avatar = await waitFor(() => screen.getByTestId(`side-bar-avatar-${user.login}`))
    const fullname = await waitFor(() => screen.getByTestId(`side-bar-user-fullname-${user.login}`))
    const login = await waitFor(() => screen.getByTestId(`side-bar-user-login-${user.login}`))
    const bio = await waitFor(() => screen.getByTestId(`side-bar-user-bio-${user.login}`))
    const socials = await waitFor(() => screen.getByTestId(`side-bar-user-socials-${user.login}`))
    const githubProfile = await waitFor(() => screen.getByTestId(`side-bar-user-github-profile-${user.login}`))
    expect(avatar).toHaveAttribute('src', user.avatarUrl)
    expect(fullname).toHaveTextContent(user.name)
    expect(login).toHaveTextContent(user.login)
    expect(bio).toHaveTextContent(user.bio)
    expect(socials).toHaveTextContent(user.followers.toString())
    expect(socials).toHaveTextContent(user.following.toString())
    expect(githubProfile).toHaveAttribute('href', `https://www.github.com/${user.login}`)
    unmount()
  })
})

