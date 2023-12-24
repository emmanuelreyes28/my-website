import React from "react";
import styles from "./styles/intro.module.css";
import WaterDropGrid from "./WaterDropGrid";

function Intro() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Hi, I&apos;m Emmanuel Reyes</h1>
      <h2 className={styles.h2}>Software Engineer</h2>
      <p className={styles.bio}>
        Motivated by ownership and pursues excellence. Aiming to work on sofware
        solutions that bring tangible benefits to users in any capacity.
      </p>
    </div>
  );
}

export default Intro;
