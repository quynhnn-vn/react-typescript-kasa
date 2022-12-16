import { NavLink } from "react-router-dom";
import { CollectionItemProps } from "../../shared/types";
import styles from "./CollectionItem.module.css";

export default function CollectionItem(props: CollectionItemProps) {
  const { lodgement } = props;
  return (
    <NavLink to={`/lodgement/${lodgement.id}`}>
      <div
        className={styles.CollectionItem}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url('${lodgement.cover}')`,
        }}
      >
        <p className={styles.CollectionItemTitle}>{lodgement.title}</p>
      </div>
    </NavLink>
  );
}
