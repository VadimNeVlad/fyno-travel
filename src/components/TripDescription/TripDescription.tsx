import React from "react";
import Button from "../Button/Button";
import styles from "./TripDescription.module.scss";
import { TripDescriptionProps } from "../../utils/types/props";

const TripDescription: React.FC<TripDescriptionProps> = ({ elRef }) => {
  const scrollToElement = () => {
    if (elRef.current) {
      elRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.tripDescription}>
      <div className={styles.tripDescription__content}>
        <div className={styles.tripDescription__item}>
          <h4>Trip duration</h4>
          <p>7 days</p>
        </div>
        <div className={styles.tripDescription__item}>
          <h4>Exploration</h4>
          <p>4 regions</p>
        </div>
        <div className={styles.tripDescription__item}>
          <h4>Flight</h4>
          <p>7h 20m from SFO</p>
        </div>
      </div>
      <div onClick={scrollToElement}>
        <Button basic>View itinerary</Button>
      </div>
    </div>
  );
};

export default TripDescription;
