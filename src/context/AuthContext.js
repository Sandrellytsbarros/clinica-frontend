import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setCredentials(JSON.parse(localStorage.getItem("credentials")));
  }, []);

  useEffect(() => {
    if (credentials) {
        setIsAuthenticated(true)
    } else {
        setIsAuthenticated(false)
    }
  }, [credentials]);

  const login = (credentials) => {
    localStorage.setItem("credentials", JSON.stringify(credentials))
    setCredentials(credentials);
  };

  const logout = () => {
    localStorage.removeItem("credentials")
    setCredentials(null);
  };

  return (
    <AuthContext.Provider value={{ credentials, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};