/** @jsxImportSource react */
import { createContext, useState, ReactNode } from "react";

type Role = "employee" | "manager" | "admin";

interface User {
  role: Role;
}

interface ContextProps {
  user: User;
  login: (role: Role) => void;
  promote: () => void;
  logout: () => void;
}

export const UserContext = createContext<ContextProps>({
  user: { role: "employee" },
  login: () => {},
  promote: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ role: "employee" });

  const login = (role: Role) => setUser({ role });

  const promote = () => {
    const currentRole = user.role;
    let newRole: Role = currentRole;

    if (currentRole === "employee") {
      newRole = "manager";
    } else if (currentRole === "manager") {
      newRole = "admin";
    }

    setUser({ role: newRole });
  };

  const logout = () => {
    setUser({ role: "employee" });
  };

  return (
    <UserContext.Provider value={{ user, login, promote, logout }}>
      {children}
    </UserContext.Provider>
  );
};
