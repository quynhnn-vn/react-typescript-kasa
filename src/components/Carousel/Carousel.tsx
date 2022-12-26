import React, { useCallback, useEffect, useRef, useState } from "react";
import { CarouselProps } from "../../shared/types";
import styles from "./Carousel.module.css";
import arrowLeft from "../../assets/arrow-left.svg";

export default function Carousel(props: CarouselProps) {
  const { pictures } = props;

  const [slideNumber, setSlideNumber] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const delay = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const previousSlide = () => {
    setSlideNumber((prevIndex) => {
      if (prevIndex === 0) {
        setTransitionEnabled(false);
        return pictures.length - 1;
      } else {
        setTransitionEnabled(true);
        return prevIndex - 1;
      }
    });
  };

  const nextSlide = useCallback(() => {
    setSlideNumber((prevIndex) => {
      if (prevIndex === pictures.length - 1) {
        setTransitionEnabled(false);
        return 0;
      } else {
        setTransitionEnabled(true);
        return prevIndex + 1;
      }
    });
  }, [pictures]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSlideNumber((prevIndex) => {
        if (prevIndex === pictures.length - 1) {
          setTransitionEnabled(false);
          return 0;
        } else {
          setTransitionEnabled(true);
          return prevIndex + 1;
        }
      });
    }, delay);
    return () => {
      resetTimeout();
    };
  }, [slideNumber, pictures.length]);

  return (
    <div className={styles.Carousel}>
      {pictures.length > 1 && (
        <button className={styles.LeftButton} onClick={previousSlide}>
          <img src={arrowLeft} alt="arrow-left" />
        </button>
      )}
      <div
        className={styles.CarouselSlider}
        style={{
          transform: `translate3d(${-slideNumber * 100}%, 0, 0)`,
          transition: !transitionEnabled ? "none" : "transform 1s ease",
        }}
      >
        {pictures.map((picture, index) => (
          <div className={styles.CarouselSlide} key={index}>
            <img
              className={styles.CarouselPhoto}
              src={picture}
              alt={`carousel-${index}`}
            />
          </div>
        ))}
      </div>
      <div className={styles.CarouselIndex}>
        {slideNumber + 1}/{pictures.length}
      </div>
      {pictures.length > 1 && (
        <button className={styles.RightButton} onClick={nextSlide}>
          <img src={arrowLeft} alt="arrow-left" />
        </button>
      )}
    </div>
  );
}
