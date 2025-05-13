import { createContext, useContext, useState } from "react";

//provid in root
const UserContext = createContext();

// constractor
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Ahmed" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
