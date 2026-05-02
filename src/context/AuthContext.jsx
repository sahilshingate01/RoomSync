import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('nestly_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    // In a real app, this would be an API call
    localStorage.setItem('nestly_user', JSON.stringify(userData));
    setUser(userData);
    return { success: true };
  };

  const login = (email, password) => {
    const storedUser = localStorage.getItem('nestly_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email === email && parsedUser.password === password) {
        setUser(parsedUser);
        return { success: true };
      }
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem('nestly_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
