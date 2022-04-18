import { createContext, useContext, useState } from "react";

const UserContext = createContext();
UserContext.displayName = "UserContext";

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [username, setUserName] = useState("");
  console.log(username);
  return (
    <UserContext.Provider value={{setUserName, username }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
