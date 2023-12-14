import React from 'react';
import { getCurrentUser, logoutAccount } from '../appwrite/authService';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const login = async () => {
    setLoading(true);
    await getCurrentUser()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        setUser(null);
        console.log(err.message);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);
    await logoutAccount()
      .then(() => {
        setUser(null);
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
  );
};
