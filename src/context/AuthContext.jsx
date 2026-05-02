import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for an active session on load
    const activeSession = localStorage.getItem('nestly_session');
    if (activeSession) {
      setUser(JSON.parse(activeSession));
    }
    setLoading(false);
  }, []);

  const signup = (userData) => {
    // Get existing accounts or initialize empty array
    const existingAccounts = JSON.parse(localStorage.getItem('nestly_accounts') || '[]');
    
    // Check if email already exists
    if (existingAccounts.find(acc => acc.email === userData.email)) {
      return { success: false, message: 'Account with this email already exists' };
    }

    // Add new account to "database"
    const updatedAccounts = [...existingAccounts, userData];
    localStorage.setItem('nestly_accounts', JSON.stringify(updatedAccounts));
    
    // Set active session
    localStorage.setItem('nestly_session', JSON.stringify(userData));
    setUser(userData);
    
    return { success: true };
  };

  const login = (email, password) => {
    // Get all accounts
    const accounts = JSON.parse(localStorage.getItem('nestly_accounts') || '[]');
    
    // Find matching user
    const foundUser = accounts.find(acc => acc.email === email && acc.password === password);
    
    if (foundUser) {
      // Set active session
      localStorage.setItem('nestly_session', JSON.stringify(foundUser));
      setUser(foundUser);
      return { success: true };
    }
    
    return { success: false, message: 'Invalid email or password' };
  };

  const logout = () => {
    // Clear only the session, keep the accounts in storage
    localStorage.removeItem('nestly_session');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
