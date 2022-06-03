import './App.css'
import './index.css'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Pagination from './components/Pagination'
import { State } from './state'
import SideBar from './components/SideBar'
import Repositories from './components/Repositories'
import RepositoryBody from './components/Main'
import { useState } from 'react'

function App() {
  const totalRepositories = useSelector((state: State) => state.totalRepositories)

  //console.log(process.env.REACT_APP_TOKEN)

  return (
    <div
      className="w-screen"
    >
      <NavBar />
      <div
        className='flex flex-col md:flex-row'
      >
        <div
          className='basis-96 md:basis-64'
        >
          <SideBar />
        </div>
        <div
          className='basis-full'
        >
          <RepositoryBody />
          {
            totalRepositories !== 0 &&
            <Pagination
              postsPerPage={10}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default App
