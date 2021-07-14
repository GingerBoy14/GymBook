import React from 'react'
import { useReducer } from 'react'
import SessionContext from './context'
import rootReducer from './reducer'

const SessionProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, { userData: null })

  return (
    <SessionContext.Provider
      value={{ session: state, sessionDispatch: dispatch }}
      {...props}
    />
  )
}

export default SessionProvider
