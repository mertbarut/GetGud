import User from '../../types/user.type'
import { ActionType } from '../action-types'
import { DisplayedUserChangeAction } from '../actions'
import avatar from '../../img/anon.png'

const initialUser = {
  avatarUrl: avatar,
  name: 'Loading...',
  login: 'Loading...',
  bio: 'Loading...',
  followers: 0,
  following: 0,
}

const displayedUserReducer = (state: User = initialUser, action: DisplayedUserChangeAction) => {
  switch (action.type) {
  case ActionType.SET_NEW_USER:
    return action.payload
  default:
    return state
  }
}

export default displayedUserReducer