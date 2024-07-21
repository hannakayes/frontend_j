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
            <Link to="/kunst" className={styles.navLink}>
              Kunst
            </Link>
            <Link to="/rezepte" className={styles.navLink}>
              Rezepte
            </Link>
            <Link to="/musik" className={styles.navLink}>
              Musik
            </Link>
            <Link to="/filme" className={styles.navLink}>
              Filme
            </Link>
            <Link to="/serien" className={styles.navLink}>
              Serien
            </Link>
            <Link to="/dokus" className={styles.navLink}>
              Dokus
            </Link>
            <Link to="/bingo" className={styles.navLink}>
              Bingo
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
