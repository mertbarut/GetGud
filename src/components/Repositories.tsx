import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import Repository from './Repository'
import EmptyListNotification from './EmptyListNotification'

export type RepositoriesProps = {
  repositories: Array<any>
}

const Repositories = ({
  repositories
}: RepositoriesProps) => {
  const currentPage = useSelector((state: State) => state.page)
  const totalRepositories = useSelector((state: State) => state.totalRepositories)
  const dispatch = useDispatch()
  const {
    setTotalRepositories
  } = bindActionCreators(actionCreators, dispatch)

  const querySearch = '' // create a state here
  useEffect(() => {
    setTotalRepositories(repositories
      .filter((repository) => (
        repository.name.toLowerCase().includes(querySearch.toLowerCase())
      ))
      .length)
  }, [])

  console.log(repositories)
  return (
    <div
      className='flex justify-center min-h-[530px]'
    >
      {
        totalRepositories === 0
          ?
          <EmptyListNotification />
          :
          <ul>
            {repositories
              .filter((repository) => (
                repository.name.toLowerCase().includes(querySearch.toLowerCase())
              ))
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((repository) => (
                <li
                  key={repository.id}
                  className='text-gray-700 font-semibold text-xl mb-0.5 border rounded-lg py-2'
                >
                  <Repository
                    repository={repository}
                  />
                </li>
              ))}
          </ul>
      }
    </div>
  )
}

export default Repositories