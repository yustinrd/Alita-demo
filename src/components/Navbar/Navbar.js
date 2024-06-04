import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
