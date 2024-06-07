import React from "react";
import styles from "./DayPlanItem.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export const DayPlanItem: React.FC = () => {
  return (
    <div className={styles.dayPlanItem}>
      <div className={styles.dayPlanItem__titleContent}>
        <div className={styles.dayPlanItem__titleContentItem}>
          <img src="/dot-white.svg" alt="dot-white" />
        </div>
        <h5>2 days plan</h5>
        <Link to="/">
          <Button>
            <img src="/sparkle-small.svg" alt="daily-plan" /> Show highlights
          </Button>
        </Link>
      </div>
      <div className={styles.dayPlanItem__content}>
        <div className={styles.dayPlanItem__contentHeader}>
          <h5>Day 1</h5>
          <div className={styles.dayPlanItem__contentHeaderInfo}>
            <div className={styles.dayPlanItem__contentHeaderDirection}>
              <img src="/direction.svg" alt="direction" />
              <span>40m</span>
            </div>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
        <div className={styles.dayPlanItem__contentMain}>
          <div className={styles.dayPlanItem__contentMainItem}>
            <div className={styles.dayPlanItem__contentMainImg}>
              <img src="/region-1.jpg" alt="region-item-1" />
            </div>
            <div className={styles.dayPlanItem__contentMainInfo}>
              <h5>Gullfoss Waterfall</h5>
              <span className={styles.dayPlanItem__contentMainPick}>
                Curator’s pick
              </span>
              <div className={styles.dayPlanItem__contentMainAbout}>
                <span>1h</span>
                <span>Iconic hike</span>
                <span>Light traffic</span>
              </div>
            </div>
          </div>
          <div className={styles.dayPlanItem__contentMainBtns}>
            <Button basic>
              <img src="/burger-btn.svg" alt="burger-btn" />
            </Button>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
        <div className={styles.dayPlanItem__contentMain}>
          <div className={styles.dayPlanItem__contentMainItem}>
            <div className={styles.dayPlanItem__contentMainImg}>
              <img src="/region-1.jpg" alt="region-item-1" />
            </div>
            <div className={styles.dayPlanItem__contentMainInfo}>
              <h5>Gullfoss Waterfall</h5>
              <span className={styles.dayPlanItem__contentMainPick}>
                Curator’s pick
              </span>
              <div className={styles.dayPlanItem__contentMainAbout}>
                <span>1h</span>
                <span>Iconic hike</span>
                <span>Light traffic</span>
              </div>
            </div>
          </div>
          <div className={styles.dayPlanItem__contentMainBtns}>
            <Button basic>
              <img src="/burger-btn.svg" alt="burger-btn" />
            </Button>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.dayPlanItem__content}>
        <div className={styles.dayPlanItem__contentHeader}>
          <h5>Day 2</h5>
          <div className={styles.dayPlanItem__contentHeaderInfo}>
            <div className={styles.dayPlanItem__contentHeaderDirection}>
              <img src="/direction.svg" alt="direction" />
              <span>1h 40m</span>
            </div>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
        <div className={styles.dayPlanItem__contentMain}>
          <div className={styles.dayPlanItem__contentMainItem}>
            <div className={styles.dayPlanItem__contentMainImg}>
              <img src="/region-1.jpg" alt="region-item-1" />
            </div>
            <div className={styles.dayPlanItem__contentMainInfo}>
              <h5>Gullfoss Waterfall</h5>
              <span className={styles.dayPlanItem__contentMainPick}>
                Curator’s pick
              </span>
              <div className={styles.dayPlanItem__contentMainAbout}>
                <span>1h</span>
                <span>Iconic hike</span>
                <span>Light traffic</span>
              </div>
            </div>
          </div>
          <div className={styles.dayPlanItem__contentMainBtns}>
            <Button basic>
              <img src="/burger-btn.svg" alt="burger-btn" />
            </Button>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
        <div className={styles.dayPlanItem__contentMain}>
          <div className={styles.dayPlanItem__contentMainItem}>
            <div className={styles.dayPlanItem__contentMainImg}>
              <img src="/region-1.jpg" alt="region-item-1" />
            </div>
            <div className={styles.dayPlanItem__contentMainInfo}>
              <h5>Gullfoss Waterfall</h5>
              <span className={styles.dayPlanItem__contentMainPick}>
                Curator’s pick
              </span>
              <div className={styles.dayPlanItem__contentMainAbout}>
                <span>1h</span>
                <span>Iconic hike</span>
                <span>Light traffic</span>
              </div>
            </div>
          </div>
          <div className={styles.dayPlanItem__contentMainBtns}>
            <Button basic>
              <img src="/burger-btn.svg" alt="burger-btn" />
            </Button>
            <Button basic>
              <img src="/dots-btn.svg" alt="dots" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
