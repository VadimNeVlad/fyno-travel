import React from "react";
import styles from "./TripGallery.module.scss";
import Button from "../Button/Button";

const TripGallery: React.FC = () => {
  return (
    <div className={styles.tripGallery}>
      <div className={styles.tripGallery__left}>
        <img src="/trip-info-1.jpg" alt="trip-photo-1" />
      </div>
      <div className={styles.tripGallery__right}>
        <div>
          <img src="/trip-info-2.jpg" alt="trip-photo-2" />
        </div>
        <div>
          <img src="/trip-info-3.jpg" alt="trip-photo-3" />
        </div>
        <div>
          <img src="/trip-info-4.jpg" alt="trip-photo-4" />
        </div>
        <div>
          <img src="/trip-info-5.jpg" alt="trip-photo-5" />
        </div>
      </div>
      <div className={styles.tripGallery__btnWrap}>
        <Button isBlur>
          <img src="/all-photos.svg" alt="all-photos" />
          All photos
        </Button>
      </div>
    </div>
  );
};

export default TripGallery;
