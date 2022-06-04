import { combineReducers } from 'redux'
import pageReducer from '../reducers/pageReducer'
import displayedAbsenceReducer from './displayedAbsenceReducer'
import displayedUserReducer from './displayedUserReducer'
import searchQueryReducer from './searchQueryReducer'
import totalRepositoriesReducer from './totalRepositoriesReducer'

const reducers = combineReducers({
  page: pageReducer,
  displayedAbsence: displayedAbsenceReducer,
  totalRepositories: totalRepositoriesReducer,
  displayedUser: displayedUserReducer,
  searchQuery: searchQueryReducer
})

export default reducers

export type State = ReturnType<typeof reducers>