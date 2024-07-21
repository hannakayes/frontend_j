import { useState } from "react";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Added for handling errors
  const [successMessage, setSuccessMessage] = useState(""); // Added for success messages
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for handling submission state

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Indicate submission has started
    setError(null); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success messages

    const payload = { username, email, password };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSuccessMessage("Registration successful!"); // Set success message
        // Optionally redirect the user or clear the form
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        setError(errorData.message || "An error occurred during signup"); // Set error message
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Network error. Please try again later."); // Set network error message
    } finally {
      setIsSubmitting(false); // Indicate submission has finished
    }
  };

  return (
    <>
      <h1>Signup</h1>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
          />
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default SignupPage;
