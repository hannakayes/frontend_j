import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const removeToken = () => {
    console.log("Removing token from localStorage");
    window.localStorage.removeItem("authToken");
  };

  const verifyToken = async (tokenToVerify) => {
    console.log("Verifying token:", tokenToVerify);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${tokenToVerify}`,
          },
        }
      );
      console.log("Token verification response status:", response.status);
      if (response.status === 200) {
        setToken(tokenToVerify);
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        console.log("Token verification failed with status:", response.status);
        setIsLoading(false);
        removeToken();
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      setIsLoading(false);
      removeToken();
    }
  };

  useEffect(() => {
    console.log("Checking localStorage for token");
    const localToken = window.localStorage.getItem("authToken");
    if (localToken) {
      console.log("Token found in localStorage:", localToken);
      verifyToken(localToken);
    } else {
      console.log("No token found in localStorage");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) {
      console.log("Setting token to localStorage:", token);
      window.localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
    }
  }, [token]);

  const fetchWithToken = async (endpoint, method = "GET", payload) => {
    console.log(
      `Fetching ${method} request to ${
        import.meta.env.VITE_API_URL
      }/api${endpoint} with payload:`,
      payload
    );
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api${endpoint}`,
        {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: method === "POST" ? JSON.stringify(payload) : undefined,
        }
      );
      console.log("API response status:", response.status);
      if (response.ok) {
        const data = await response.json();
        console.log("API response data:", data);
        return data;
      } else {
        console.error("API request failed with status:", response.statusText);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const handleLogout = () => {
    console.log("Handling logout");
    removeToken();
    setToken();
    setIsAuthenticated(false);
  };

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        token,
        setToken,
        fetchWithToken,
        handleLogout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;
