import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { PageChangeAction, totalRepositoriesChangeAction, DisplayedUserChangeAction, DisplayedAbsenceChangeAction, SearchQueryChangeAction } from '../actions'
import User from '../../types/user.type'

export const goToNextPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.NEXT,
      payload: amount
    })
  }
}

export const goToPrevPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.PREV,
      payload: amount
    })
  }
}

export const goToFirstPage = () => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.FIRST,
    })
  }
}

export const setDisplayedAbsence = (id: number) => {
  return (dispatch: Dispatch<DisplayedAbsenceChangeAction>) => {
    dispatch({
      type: ActionType.SETABSENCE,
      payload: id
    })
  }
}

export const setTotalRepositories = (total: number) => {
  return (dispatch: Dispatch<totalRepositoriesChangeAction>) => {
    dispatch({
      type: ActionType.SET_TOTAL_REPOSITORIES,
      payload: total
    })
  }
}

export const setDisplayedUser = (user: User) => {
  return (dispatch: Dispatch<DisplayedUserChangeAction>) => {
    dispatch({
      type: ActionType.SET_NEW_USER,
      payload: user
    })
  }
}

export const setSearchQuery = (query: string) => {
  return (dispatch: Dispatch<SearchQueryChangeAction>) => {
    dispatch({
      type: ActionType.SET_SEARCH_QUERY,
      payload: query
    })
  }
}