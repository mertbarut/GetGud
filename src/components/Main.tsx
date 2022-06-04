import React, { useEffect } from 'react'
import Repositories from './Repositories'
import { gql, useQuery } from '@apollo/client'
import LoadingNotification from './LoadingNotification'
import ErrorNotification from './ErrorNotification'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import { bindActionCreators } from 'redux'
import SearchBar from './SearchBar'

import avatar from '../img/anon.png'

export interface MainPropTypes {
  itemsPerPage: number
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

function Main( { itemsPerPage } : MainPropTypes ) {
  const result = useQuery(ALL_REPOSITORIES)
  const dispatch = useDispatch()
  console.log(result)
  const totalRepositories = useSelector((state: State) => state.totalRepositories)
  const {
    setDisplayedUser
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setDisplayedUser({
      avatarUrl: !result.loading && !result.error ? result.data.user.avatarUrl : avatar,
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
        className='flex-col justify-center pt-4 px-1'
      >
        <LoadingNotification />
      </div>
    )
  }

  if (result.error) {
    return (
      <div
        className='flex-col justify-center pt-4 px-1'
      >
        <ErrorNotification />
      </div>
    )
  }

  const repositories = result.data.user.repositories.nodes

  //console.log(user)
  //console.log(repositories)

  return (
    <div
      className='flex-col justify-center pt-4 px-1'
    >
      {/* <SearchBar /> */}
      <Repositories
        repositories={repositories}
        itemsPerPage={itemsPerPage}
      />
    </div>
  )
}

export default Main
