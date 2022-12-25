import styles from "./Footer.module.css";
import logoWhite from "../../assets/logo-white.svg";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <img src={logoWhite} alt="logo-white" />
      <h2 className={styles.FooterText}>© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}
