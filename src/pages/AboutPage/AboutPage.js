import React from "react";
import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <h1>About Us</h1>
      <p>
        This is the about page of our application, where you can learn more
        about us.
      </p>
    </div>
  );
}

export default AboutPage;
