import React, { useState } from "react";
import { CollapseProps } from "../../shared/types";
import styles from "./Collapse.module.css";
import arrow from "../../assets/arrow-up.svg";

export default function Collapse(props: CollapseProps) {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.Collapse}>
      <div className={styles.CollapseHeader} onClick={toggleOpen}>
        <h2 className={styles.CollapseTitle}>{title}</h2>
        <img
          className={[styles.CollapseArrow, isOpen ? styles.UpArrow : ""].join(
            " "
          )}
          src={arrow}
          alt="arrow"
        />
      </div>
      {isOpen && <p className={styles.CollapseContent}>{content}</p>}
    </div>
  );
}
