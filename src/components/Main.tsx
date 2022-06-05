import React, { useEffect } from 'react'
import Repositories from './Repositories'
import { gql, useQuery } from '@apollo/client'
import LoadingNotification from './LoadingNotification'
import ErrorNotification from './ErrorNotification'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import { bindActionCreators } from 'redux'
import SearchBar from './SearchBar'
import placeholderAvatar from '../img/anon.png'
import { RepositoryNode } from './Repository'

interface MainPropTypes {
  repositoriesPerPage: number
}

const ALL_REPOSITORIES = gql`
query {
  user(login: "mertbarut") {
    avatarUrl
    bio
    name
    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        name
        id
        description
        url
        languages(first: 4) {
          nodes {
            color
            name
          }
        }
      }
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    login
  }
}
`

/**
 * Fetches the data from GitHub using GraphQL,
 * and renders the main body component on screen.
 *
 * Needs following redux state(s) to be defined:
 * - totalRepositories
 *
 * Needs following redux action(s) to be defined:
 * - setDisplayedUser
 * @param {number} repositoriesPerPage Number of repositories to display per page.
 */
function Main( { repositoriesPerPage } : MainPropTypes ) {
  const result = useQuery(ALL_REPOSITORIES)
  const dispatch = useDispatch()
  const totalRepositories = useSelector((state: State) => state.totalRepositories)
  const {
    setDisplayedUser
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setDisplayedUser({
      avatarUrl: !result.loading && !result.error ? result.data.user.avatarUrl : placeholderAvatar,
      name: !result.loading && !result.error ? result.data.user.name : 'Loading...',
      login: !result.loading && !result.error ? result.data.user.login : 'Loading...',
      bio: !result.loading && !result.error ? result.data.user.bio : 'Loading...',
      followers: !result.loading && !result.error ? result.data.user.followers.totalCount : 0,
      following: !result.loading && !result.error ? result.data.user.following.totalCount : 0,
    })
  }, [totalRepositories])

  if (result.loading) {
    return (
      <div
        className='flex justify-center pt-4 px-1'
      >
        <LoadingNotification />
      </div>
    )
  }

  if (result.error) {
    return (
      <div
        className='flex justify-center pt-4 px-1'
      >
        <ErrorNotification />
      </div>
    )
  }

  const repositories: Array<RepositoryNode> = result.data.user.repositories.nodes

  return (
    <div
      className='flex-col justify-center pt-4 px-1'
    >
      <SearchBar />
      <Repositories
        repositories={repositories}
        repositoriesPerPage={repositoriesPerPage}
      />
    </div>
  )
}

export default Main
