import redStar from "../../assets/red-star.svg";
import whiteStar from "../../assets/white-star.svg";
import { RatingProps } from "../../shared/types";
import styles from "./Rating.module.css";

export default function Rating(props: RatingProps) {
  const { rate } = props;
  const roundRate = Math.ceil(Number(rate));

  return (
    <div className={styles.Rating}>
      {[...Array(roundRate)].map((i) => {
        return <img key={i} src={redStar} alt="red-star" />;
      })}
      {[...Array(5 - roundRate)].map((i) => {
        return <img key={i} src={whiteStar} alt="white-star" />;
      })}
    </div>
  );
}
