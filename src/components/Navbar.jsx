import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Group, Button } from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";
import styles from "../styles/Navbar.module.css"; // Ensure this path is correct

// Import your images
import eagleImg from "../assets/images/eagle.png";
import eagleHoverImg from "../assets/images/eagle_hover.png";

const Navbar = () => {
  const { isAuthenticated, handleLogout } = useContext(SessionContext);
  const [hover, setHover] = useState(false);

  return (
    <Container
      fluid
      className={`${styles.navbar} ${!isAuthenticated ? styles.hidden : ""}`}
    >
      {/* Home Button */}
      <Link
        to="/"
        className={styles.logo}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={hover ? eagleHoverImg : eagleImg}
          alt="Home"
          className={styles.homeButton}
        />
      </Link>

      {/* Navigation Links */}
      <Group position="right" spacing="lg" className={styles.navGroup}>
        {isAuthenticated && (
          <>
            <Link to="/profile" className={styles.navLink}>
              Profile
            </Link>
            <Link to="/recipes" className={styles.navLink}>
              Rezepte
            </Link>
            <Link to="/recipes/new" className={styles.navLink}>
              Add a new recipe
            </Link>
            <Button
              className={styles.logoutButton}
              variant="outline"
              color="black"
              onClick={handleLogout}
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
