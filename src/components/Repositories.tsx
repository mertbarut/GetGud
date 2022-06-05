import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import Repository, { RepositoryNode } from './Repository'
import EmptyListNotification from './EmptyListNotification'

interface RepositoriesProps {
  repositories: Array<RepositoryNode>,
  repositoriesPerPage: number
}

/**
 * Renders the array of repository nodes given as parameter.
 *
 * Needs following redux state(s) to be defined:
 * - page
 * - totalRepositories
 * - searchQuery
 *
 * Needs following redux action(s) to be defined:
 * - setTotalRepositories
 * @param {Array<RepositoryNode>} repositories Array that contains the repository nodes returned by GitHub.
 * @param {number} repositoriesPerPage Number of repositories to display per page.
 */
const Repositories = ({
  repositories,
  repositoriesPerPage
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
        repository.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repository.languages.nodes.some((node) => node.name.toLowerCase().includes(searchQuery.toLowerCase()))
      ))
      .length)
  }, [searchQuery])

  return (
    <div
      className='flex justify-center min-h-[700px]'
    >
      {
        totalRepositories === 0
          ?
          <EmptyListNotification />
          :
          <ul>
            {repositories
              .filter((repository) => (
                repository.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                repository.languages.nodes.some((node) => node.name.toLowerCase().includes(searchQuery.toLowerCase()))
              ))
              .slice((currentPage - 1) * repositoriesPerPage, currentPage * repositoriesPerPage)
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