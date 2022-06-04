import React, { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import { setSearchQuery } from '../state/action-creators'

export default function SearchBar() {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state: State) => state.searchQuery)

  console.log(searchQuery)

  const {
    setSearchQuery,
    goToFirstPage
  } = bindActionCreators(actionCreators, dispatch)

  const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchQuery(event.target.value)
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
          className="mb-3 xl:w-96"
        >
          <input
            type="search"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChangeSearchQuery}
          />
        </div>
      </div>
    </div>
  )
}
