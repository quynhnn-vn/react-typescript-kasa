import React from "react";
import { CarouselProps } from "../../shared/types";
import styles from "./Carousel.module.css";

export default function Carousel(props: CarouselProps) {
  //     const {children} = props;
  //     const [position, setPosition] = useState<number>(0);
  //     const [direction, setDirection] = useState<"next" | "prev">("next");
  //     const [sliding, setSliding] = useState<boolean>(false);

  //     const getOrder = (itemIndex) => {
  //     const numItems = children.length;

  //     if (numItems === 2) return itemIndex;

  //     if (itemIndex - position < 0)
  //       return numItems - Math.abs(itemIndex - position);
  //     return itemIndex - position;
  //   }

  return (
    <div className={styles.Carousel}>
      <div
        className={styles.Inner}
        style={{
          transform: "translateX(-0%)",
        }}
      ></div>
    </div>
  );
}
