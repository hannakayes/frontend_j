import React, { useContext } from "react";
import { Container, Group, Button } from "@mantine/core"; // Import Button from Mantine
import { Link } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import styles from "../styles/Navbar.module.css"; // Ensure this path is correct

// Import your images
import eagleImg from "../assets/images/eagle.png";
import eagleHoverImg from "../assets/images/eagle_hover.png";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useContext(SessionContext);

  return (
    <Container fluid className={styles.navbar}>
      {/* Home Button */}
      <Link to="/" className={styles.logo}>
        <img src={eagleImg} alt="Home" className={styles.homeButton} />
      </Link>

      {/* Navigation Links */}
      <Group position="right" spacing="lg" className={styles.navLinks}>
        {isAuthenticated && (
          <>
            <Link to="/profile" className={styles.navLink}>
              Profile
            </Link>
            <Link to="/recipes" className={styles.navLink}>
              All recipes
            </Link>
            <Link to="/recipes/new" className={styles.navLink}>
              Add a new recipe
            </Link>
            <Button
              color="red"
              onClick={handleLogout}
              className={styles.logoutButton} // Use custom styling for the button
            >
              Logout
            </Button>
          </>
        )}
        {!isAuthenticated && (
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        )}
      </Group>
    </Container>
  );
};

export default Navbar;
