import { useReducer } from 'react'
import SessionContext from './context'
import rootReducer from './reducer'

const SessionProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, {})

  return <SessionContext.Provider value={{ state, dispatch }} {...props} />
}

export default SessionProvider
