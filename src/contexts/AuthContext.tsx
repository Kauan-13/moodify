import { createContext, useContext, useState, type ReactNode } from 'react';

type UserData = {
  username: string;
  service: string;
} | null;

type AuthContextType = {
  user: UserData;
  setUser: (user: UserData) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>(null);

  const logout = () => { setUser(null) };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuth must be used within AuthProvider');
  
  
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth, type UserData }