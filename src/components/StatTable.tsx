import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators, State } from './../state'
import { bindActionCreators } from '@reduxjs/toolkit'
import Repository from './Repository'

export type StatTableProps = {
  repository: Repository,
}

type LanguageNode = {
  name: string,
  color: string
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
      className="min-w-[320px] grid grid-rows-5 grid-cols-2 grid-flow-col shrink-0"
    >
      <div
        className="py-2 px-3 self-center text-md lg:text-md font-light text-gray-900 text-left col-span-2 row-start-1 col-start-1"
      >
        {repository.name && repository.name.substring(0, 32)}
        {repository.name && repository.name.length >= 32 && '...'}
      </div>
      <div
        className="text-xs py-2 px-3 lg:text-md font-light text-gray-900 text-left col-span-2 row-start-2 col-start-1"
      >
        {repository.description && repository.description.substring(0, 48)}
        {repository.description && repository.description.length >= 48 && '...'}
        {!repository.description &&
          <em>
            No description is provided.
          </em>}
      </div>
      <div
        className="text-sm py-1 px-1 h-6 self-center lg:text-md font-light text-gray-900 text-center row-start-3 col-start-1"
      >
      {
        repository.languages.nodes.length !== 0 &&
        <>
          <span
            className='rounded-lg p-1'
            style={{ backgroundColor: `${repository.languages.nodes[0].color}`, color: 'rgb(255 255 255)' }}
          >
            {repository.languages.nodes[0].name}
          </span>
        </>
      }
      </div>
      <div
        className="text-sm py-1 px-1 h-6 self-center lg:text-md font-light text-gray-900 text-center row-start-3 col-start-2"
      >
      {
        repository.languages.nodes.length > 1 &&
          <>
            <span
              className='rounded-lg p-1'
              style={{ backgroundColor: `${repository.languages.nodes[1].color}`, color: 'rgb(255 255 255)' }}
            >
              {repository.languages.nodes[1].name}
            </span>
          </>
      }
      </div>
      <div
        className="text-sm py-1 px-1 h-6 self-center lg:text-md font-light text-gray-900 text-center row-start-4 col-start-1"
      >
      {
        repository.languages.nodes.length > 2 &&
        <>
          <span
            className='rounded-lg p-1'
            style={{ backgroundColor: `${repository.languages.nodes[2].color}`, color: 'rgb(255 255 255)' }}
          >
            {repository.languages.nodes[2].name}
          </span>
        </>
      }
      </div>
      <div
        className="text-sm py-1 px-1 h-6 self-center lg:text-md font-light text-gray-900 text-center row-start-4 col-start-2"
      >
      {
        repository.languages.nodes.length > 3 &&
        <>
          <span
            className='rounded-lg p-1'
            style={{ backgroundColor: `${repository.languages.nodes[3].color}`, color: 'rgb(255 255 255)' }}
          >
            {repository.languages.nodes[3].name}
          </span>
        </>
      }
      </div>
      <div
        className="flex text-sm self-center justify-center lg:text-lg font-light text-gray-900 text-center col-span-2 col-start-1 row-start-5"
      >
        <a
          className="flex items-center text-sm py-2 px-3 h-8 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
          href='!#'
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
          onClick={(e) => {
            e.preventDefault()
             window.open(repository.url)
          }}
        >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
          </svg>
          <span>See Code</span>
        </a>
      </div>
    </div>
  )
}

export default StatTable
