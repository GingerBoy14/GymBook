import React from 'react'
import { useReducer } from 'react'
import SessionContext from './context'
import rootReducer from './reducer'

const default_user_data = {
  avatarURL:
    'https://firebasestorage.googleapis.com/v0/b/b2g-backend-app-dev.appspot.com/o/images%2F012d2f55-e67b-50ff-b000-cdbf6069929a?alt=media&token=b359e64c-42c7-47fa-833c-8ee4ddd2e8ec',
  firstName: 'Maxim',
  secondName: 'Makarov',
  email: 'maxim.makarov14@gmail.com',
  weight: 73.5,
  birthday: 1279480759000
}

const SessionProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, {
    userData: default_user_data
  })

  return (
    <SessionContext.Provider
      value={{ session: state, sessionDispatch: dispatch }}
      {...props}
    />
  )
}

export default SessionProvider
