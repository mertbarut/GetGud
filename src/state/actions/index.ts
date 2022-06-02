import { ActionType } from '../action-types'

interface NextPageAction {
  type: ActionType.NEXT
  payload: number
}

interface PreviousPageAction {
  type: ActionType.PREV
  payload: number
}

interface FirstPageAction {
  type: ActionType.FIRST
}

interface SetDisplayedAbsenceAction {
  type: ActionType.SETABSENCE
  payload: number
}

interface DefaultDisplayedAbsenceAction {
  type: ActionType.SETDEFAULT
  payload: number
}

interface SetTotalRepositoriesAction {
  type: ActionType.SET_TOTAL_REPOSITORIES
  payload: number
}

export type PageChangeAction = NextPageAction | PreviousPageAction | FirstPageAction

export type DisplayedAbsenceChangeAction = SetDisplayedAbsenceAction | DefaultDisplayedAbsenceAction

export type totalRepositoriesChangeAction = SetTotalRepositoriesAction