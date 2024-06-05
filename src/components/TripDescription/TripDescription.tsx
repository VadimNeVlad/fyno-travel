import React from "react";
import Button from "../Button/Button";
import styles from "./TripDescription.module.scss";

const TripDescription: React.FC = () => {
  return (
    <div className={styles.tripDescription}>
      <div className={styles.tripDescription__content}>
        <div>
          <h4>Trip duration</h4>
          <p>7 days</p>
        </div>
        <div>
          <h4>Exploration</h4>
          <p>4 regions</p>
        </div>
        <div>
          <h4>Flight</h4>
          <p>7h 20m from SFO</p>
        </div>
      </div>
      <Button basic>View itinerary</Button>
    </div>
  );
};

export default TripDescription;
