import React from "react";
import styles from "../styles/HomePage.module.css"; // Import the CSS module

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Hallo Janosch!</h1>
        <p>
          Auf dieser Seite findest du eine Sammlung mit schönen Dingen. Sie ist
          nur für dich gedacht, wenn du gerade neue Eindrücke oder Zerstreuung
          brauchst.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
