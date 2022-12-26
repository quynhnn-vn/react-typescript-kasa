import redStar from "../../assets/red-star.svg";
import whiteStar from "../../assets/white-star.svg";
import { RatingProps } from "../../shared/types";
import styles from "./Rating.module.css";

export default function Rating(props: RatingProps) {
  const { rate } = props;
  const roundRate = Math.ceil(Number(rate));

  return (
    <div className={styles.Rating}>
      {Array.from(Array(roundRate).keys()).map((i) => (
        <img key={`red-${i}`} src={redStar} alt="red-star" />
      ))}
      {Array.from(Array(5 - roundRate).keys()).map((j) => (
        <img key={`white-${j}`} src={whiteStar} alt="white-star" />
      ))}
    </div>
  );
}
