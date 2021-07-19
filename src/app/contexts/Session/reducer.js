import { TYPES } from './'

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_USER: {
      return { ...state, userData: action.payload }
    }
    case TYPES.LOGOUT: {
      return { ...state, userData: null }
    }
    case TYPES.MOCK_USER: {
      return {
        ...state,
        userData: {
          avatarURL:
            'https://firebasestorage.googleapis.com/v0/b/b2g-backend-app-dev.appspot.com/o/images%2F012d2f55-e67b-50ff-b000-cdbf6069929a?alt=media&token=b359e64c-42c7-47fa-833c-8ee4ddd2e8ec',
          firstName: 'Maxim',
          secondName: 'Makarov',
          email: 'maxim.makarov14@gmail.com',
          weight: 73.5,
          birthday: 1279480759000
        }
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
