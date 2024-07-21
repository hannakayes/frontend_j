import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import styles from "../styles/LoginPage.module.css";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const { token, setToken, isAuthenticated } = useContext(SessionContext); // Get token and isAuthenticated
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5005/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("authToken", token);
        setToken(token);
        console.log("Token stored in localStorage:", token);

        // Redirect to home or intended page after successful login
        navigate("/");
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Login failed. Please try again.");
        console.error("Login error:", error.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      {isAuthenticated && <Navbar />} {/* Conditionally render Navbar */}
      <div
        className={`${styles.container} ${
          !isAuthenticated ? styles.noNavbar : ""
        }`}
      >
        <div className={styles.formWrapper}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <input
              className={styles.input}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
            />
            <button type="submit" className={styles.button}>
              Log In
            </button>
          </form>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}{" "}
          {/* Display error messages */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
