import { useContext } from 'react'
import SessionContext from './context'
/**
 * @info useSession (13 Jul 2021) // CREATION DATE
 *
 * @comment useSession - Hook that using to get data from context about user.
 *
 * @since 15 Jul 2021 ( v.0.0.2 ) // LAST-EDIT DATE
 *
 * @returns {{
        session:{
          userData:{
            firstName,
            secondName,
            email,
            avatarURL,
            weight
          }
         },
        sessionDispatch,
        sessionLoading
      }}
 */
const useSession = () => useContext(SessionContext)

export default useSession
