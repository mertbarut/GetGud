import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

type PaginationProps = {
  itemsPerPage: number
}

export default function Pagination({
  itemsPerPage,
}: PaginationProps) {
  const dispatch = useDispatch()
  const {
    goToNextPage,
    goToPrevPage,
  } = bindActionCreators(actionCreators, dispatch)
  const currentPage = useSelector((state: State) => state.page)
  const totalRepositories = useSelector((state: State) => state.totalRepositories)

  return (
    <div className='flex justify-center py-2'>
      <nav className='block'></nav>
      <div>
        <nav
          className='flex justify-center relative z-0 rounded-md -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={(e) => {
              e.preventDefault()
              goToPrevPage(1)
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              (currentPage) * itemsPerPage < totalRepositories ? goToNextPage(1) : goToNextPage(0)
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
        </nav>
        <div>
          <p className='text-sm text-gray-700 py-2'>
            Showing
            <span className='font-medium'> {(currentPage - 1) * itemsPerPage} </span>
            to
            <span className='font-medium'> {currentPage * itemsPerPage} </span>
            of
            <span className='font-medium'> {totalRepositories} </span>
            results
          </p>
        </div>
      </div>
    </div>
  )
}