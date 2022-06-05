import './App.css'
import './index.css'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Pagination from './components/Pagination'
import { State } from './state'
import SideBar from './components/SideBar'
import Main from './components/Main'

export interface AppPropTypes {
  repositoriesPerPage: number
}

/**
 * Renders the Navigation bar, Side bar, and,
 * the main body, and Pagination components on screen.
 *
 * Needs following redux state(s) to be defined:
 * - totalRepositories
 * @param {number} repositoriesPerPage Number of repositories to display per page.
 */
function App( { repositoriesPerPage } : AppPropTypes ) {
  const totalRepositories = useSelector((state: State) => state.totalRepositories)

  return (
    <div>
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
          <Main
            repositoriesPerPage={repositoriesPerPage}
          />
          {/* Pagination is disabled when there is no repository
            * to display.
            */}
          {
            totalRepositories !== 0 &&
            <Pagination
              repositoriesPerPage={repositoriesPerPage}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default App
