import React, { ChangeEventHandler } from 'react'
import Repositories from './Repositories'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import { gql, useQuery } from '@apollo/client'
import LoadingNotification from './LoadingNotification'
import ErrorNotification from './ErrorNotification'

const ALL_REPOSITORIES = gql`
query {
  user(login: "mertbarut") {
    avatarUrl
    bio
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

function RepositoryBody() {
  const result = useQuery(ALL_REPOSITORIES)
  console.log(result)

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

  const user = {
    avatarUrl: result.data.user.avatarUrl,
    name: result.data.user.name,
    login: result.data.user.login,
    bio: result.data.user.bio,
    followers: result.data.user.followers.totalCount,
    following: result.data.user.following.totalCount,
  }

  const repositories = result.data.user.repositories.nodes

  console.log(user)
  console.log(repositories)

  return (
    <div
      className='flex-col justify-center pt-4 px-1'
    >
      <Repositories repositories={repositories} />
    </div>
  )
}

export default RepositoryBody
