import { TagProps } from "../../shared/types";
import styles from "./Tag.module.css";

export default function Tag(props: TagProps) {
  const { tag } = props;
  return <span className={styles.Tag}>{tag}</span>;
}
