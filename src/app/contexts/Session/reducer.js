import { TYPES } from './'

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_USER: {
      return { ...state, userData: action.payload }
    }
    case TYPES.LOGOUT: {
      return { ...state, userData: null }
    }
    default: {
      return state
    }
  }
}

export default reducer
