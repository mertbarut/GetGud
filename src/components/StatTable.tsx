import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators, State } from './../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import Repository from './Repository'

export type StatTableProps = {
  repository: Repository,
}

const StatTable = ({ repository }: StatTableProps ) => {
  const dispatch = useDispatch()
  const displayedAbsence = useSelector((state: State) => state.displayedAbsence)

  const { setDisplayedAbsence } = bindActionCreators(actionCreators, dispatch)
  //console.log(Object.keys(repository.languages.nodes[0]))
  //console.log(repository.languages.nodes[0]['name'])
  return (
    <div
      data-testid="stattable"
      className="grid grid-rows-4 grid-cols-4 grid-flow-col shrink-0 place-items-center"
    >
      <div
        className="w-64 lg:w-[50vw] text-md lg:text-lg font-light text-gray-900 text-left col-span-4"
      >
        {repository.name}
      </div>
      <div
        className="w-64 lg:w-[50vw] text-sm lg:text-md font-light text-gray-900 text-left col-span-4"
      >
        {repository.description}
      </div>
      <div
        className="w-64 lg:w-[50vw] text-sm lg:text-lg font-light text-gray-900 text-center col-span-4"
      >
        {repository.url}
      </div>
      <div
        className="text-md lg:text-lg font-light text-gray-900 text-center row-start-4"
      >
      {
        repository.languages.nodes.length !== 0 &&
        repository.languages.nodes[0].name
      }
      </div>
      <div
        className="text-md lg:text-lg font-light text-gray-900 text-center row-start-4"
      >
      {
        repository.languages.nodes.length > 1 &&
        repository.languages.nodes[1].name
      }
      </div>
      <div
        className="text-md lg:text-lg font-light text-gray-900 text-center row-start-4"
      >
      {
        repository.languages.nodes.length > 2 &&
        repository.languages.nodes[2].name
      }
      </div>
      <div
        className=" text-md lg:text-lg font-light text-gray-900 text-center row-start-4"
      >
      {
        repository.languages.nodes.length > 3 &&
        repository.languages.nodes[3].name
      }
      </div>
    </div>
  )
}

export default StatTable
