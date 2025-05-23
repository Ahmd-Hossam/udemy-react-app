import { createContext, useContext, useState } from "react";

//provid in root
const UserContext = createContext();

// constractor
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Ahmed Hossam",
    img: "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
