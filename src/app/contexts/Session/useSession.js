import { useContext } from 'react'
import SessionContext from './context'

const useSession = () => useContext(SessionContext)

export default useSession
