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
        <h1 className={styles.heading}>Hallo Janosch.</h1>
        <p>
          Willkommen auf deiner eigenen Website. Hier kannst du eine Sammlung
          mit schönen Dingen finden, wenn du gerade neue Eindrücke oder
          Zerstreuung brauchst – ohne das diese in einer Ecke verstauben.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
