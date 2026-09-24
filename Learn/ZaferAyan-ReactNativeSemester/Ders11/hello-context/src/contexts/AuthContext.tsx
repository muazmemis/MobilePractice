import { createContext, ReactNode, useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Undefined vermemizin nedeni bilerek hata verdirmek
// Eğer AuthProvider ile sarmalanmadıysa
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, isLoggedIn: !!user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
