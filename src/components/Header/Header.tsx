import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logoFull from "../../assets/logo-full.svg";

export default function Header() {
  const getActiveClass = (isActive: boolean) =>
    isActive ? [styles.NavLink, styles.Active].join(" ") : styles.NavLink;

  return (
    <header className={styles.Header}>
      <NavLink to="" className={styles.Logo}>
        <img src={logoFull} alt="logo-full" />
      </NavLink>
      <nav className={styles.NavContainer}>
        <NavLink to="" className={({ isActive }) => getActiveClass(isActive)}>
          Accueil
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => getActiveClass(isActive)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
