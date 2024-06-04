import React from "react";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Page Not Found. The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFoundPage;
