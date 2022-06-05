import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

/**
 * Renders a search bar on screen, which updates the redux state
 * responsible for filtering repositories by name or programming language
 * upon user input.
 * Needs following redux state(s) to be defined:
 * - searchQuery
 * Needs following redux action(s) to be defined:
 * - setSearchQuery
 * - goToFirstPage
 */
function SearchBar() {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state: State) => state.searchQuery)
  const {
    setSearchQuery,
    goToFirstPage
  } = bindActionCreators(actionCreators, dispatch)

  const handleChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
    goToFirstPage()
  }

  return (
    <div
      className="p-2"
    >
      <div
        className="flex justify-center"
      >
        <div
          className="mb-3 md:w-96"
        >
          <input
            type="search"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="search"
            placeholder="Find a repository..."
            value={searchQuery}
            onChange={handleChangeSearchQuery}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar