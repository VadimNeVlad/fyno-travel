import React from "react";
import styles from "./TripItinerary.module.scss";

const TripItinerary: React.FC = () => {
  return (
    <div className={styles.tripItinerary}>
      <h3>Iceland itinerary</h3>
      <div className={styles.tripItinerary__content}>
        <div className={styles.tripItinerary__flights}>
          <div
            className={`${styles.tripItinerary__flight} ${styles.tripItinerary__item}`}
          >
            <span>Reykjavík, KEF</span>
          </div>
          <img src="/plane-small.svg" alt="plane-icon" />
          <div
            className={`${styles.tripItinerary__flight} ${styles.tripItinerary__item}`}
          >
            <span>San Francisco, SFO</span>
          </div>
        </div>
        <div className={styles.tripItinerary__info}>
          <div
            className={`${styles.tripItinerary__infoDates} ${styles.tripItinerary__item}`}
          >
            <img src="/calendar-small.svg" alt="calendar" />
            <span>Jul 03 – Jul 11</span>
          </div>
          <div
            className={`${styles.tripItinerary__infoAmount} ${styles.tripItinerary__item}`}
          >
            <img src="/person-small.svg" alt="person" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItinerary;
