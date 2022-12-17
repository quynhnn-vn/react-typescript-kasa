import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
  return (
    <main className={styles.Error}>
      <h3 className={styles.ErrorTitle}>404</h3>
      <p className={styles.ErrorText}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="" className={styles.NavLink}>
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  );
}
