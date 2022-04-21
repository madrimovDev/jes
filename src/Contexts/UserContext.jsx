import { createContext, memo, useCallback, useContext, useState } from 'react'

const UserContext = createContext()
// UserContext.displayName = 'UserContext'

export const useUserContext = () => useContext(UserContext)

function UserContextProvider({ children }) {
  const [username, setUserName] = useState('')
  return (
    <UserContext.Provider value={{ setName: setUserName, username }}>
      {children}
    </UserContext.Provider>
  )
}

export default memo(UserContextProvider, (prev, next) => true)
