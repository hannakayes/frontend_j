import { Container } from "@mantine/core";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Container fluid className={styles.footer}>
      <p>
        © 2024{" "}
        <a
          href="https://github.com/hannakayes"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          HANNA KOMORNITZYK
        </a>
      </p>
    </Container>
  );
};

export default Footer;
