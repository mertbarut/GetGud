import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import Repository, { RepositoryNode } from './Repository'
import EmptyListNotification from './EmptyListNotification'

export type RepositoriesProps = {
  repositories: Array<RepositoryNode>,
  itemsPerPage: number
}

const Repositories = ({
  repositories,
  itemsPerPage
}: RepositoriesProps) => {
  const currentPage = useSelector((state: State) => state.page)
  const totalRepositories = useSelector((state: State) => state.totalRepositories)
  const searchQuery = useSelector((state: State) => state.searchQuery)

  const dispatch = useDispatch()
  const {
    setTotalRepositories
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setTotalRepositories(repositories
      .filter((repository) => (
        repository.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      .length)
  }, [searchQuery])

  console.log(repositories)
  return (
    <div
      className='flex justify-center min-h-[800px]'
    >
      {
        totalRepositories === 0
          ?
          <EmptyListNotification />
          :
          <ul>
            {repositories
              .filter((repository) => (
                repository.name.toLowerCase().includes(searchQuery.toLowerCase())
              ))
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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