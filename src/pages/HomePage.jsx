import React from "react";
import styles from "../styles/HomePage.module.css"; // Import the CSS module
import videoSrc from "../assets/videos/ShortEaredOwl_background.mp4";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
