import React from "react";
import Button from "../Button/Button";
import styles from "./TripInfoHighlights.module.scss";

const TripInfoHighlights: React.FC = () => {
  return (
    <div className={styles.tripInfoHighlights}>
      <div className={styles.tripInfoHighlights__titleContent}>
        <h2>Iceland’s Highlights</h2>
        <div className={styles.tripInfoHighlights__btns}>
          <Button>
            <img src="/bookmark-small.svg" alt="bookmark" /> Add to wishlist
          </Button>
          <Button>
            <img src="/share-small.svg" alt="share" /> Share
          </Button>
        </div>
      </div>
      <div className={styles.tripInfoHighlights__info}>
        <div className={styles.tripInfoHighlights__infoHeader}>
          <img src="/avatar.jpg" alt="avatar" />
          <div>
            <strong>Curated by Sandra</strong>
            <span>Fyno expert</span>
          </div>
        </div>
        <p>
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled
          natural beauty. From its majestic waterfalls and geothermal wonders to
          the vibrant culture and rich history, Iceland promises an
          unforgettable adventure for every traveler.
        </p>
      </div>
    </div>
  );
};

export default TripInfoHighlights;
