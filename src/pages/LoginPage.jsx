import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { SessionContext } from "../contexts/SessionContext";
import styles from "../styles/LoginPage.module.css";

const LoginPage = () => {
  const { setToken } = useContext(SessionContext);
  const navigate = useNavigate(); // Initialize navigate function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

        // Redirect to  after successful login
        navigate("/");
      } else {
        const error = await response.json();
        console.error("Login error:", error.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default LoginPage;
