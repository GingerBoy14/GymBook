import React from 'react'
import { useReducer } from 'react'
import SessionContext from './context'
import rootReducer from './reducer'

const default_user_data = {
  firstName: 'Maxim',
  secondName: 'Makarov',
  email: 'maxim.makarov14@gmail.com',
  weight: 73.5
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
