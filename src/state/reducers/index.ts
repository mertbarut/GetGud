import { combineReducers } from 'redux'
import pageReducer from '../reducers/pageReducer'
import displayedAbsenceReducer from './displayedAbsenceReducer'
import totalRepositoriesReducer from './totalRepositoriesReducer'

const reducers = combineReducers({
  page: pageReducer,
  displayedAbsence: displayedAbsenceReducer,
  totalRepositories: totalRepositoriesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>