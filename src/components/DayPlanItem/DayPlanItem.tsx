import React from "react";
import styles from "./DayPlanItem.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { highlightsMock } from "../../utils/mocks/highlight";

export const DayPlanItem: React.FC = () => {
  return (
    <div className={styles.dayPlanItem}>
      <div className={styles.dayPlanItem__titleContent}>
        <div className={styles.dayPlanItem__titleContentItem}>
          <img src="/dot-white.svg" alt="dot-white" />
        </div>
        <h5>
          {highlightsMock.length}{" "}
          {highlightsMock.length === 1 ? "day " : "days "}plan
        </h5>
        <Link to="/">
          <Button>
            <img src="/sparkle-small.svg" alt="daily-plan" /> Show highlights
          </Button>
        </Link>
      </div>

      {highlightsMock.map((highlight) => (
        <div key={highlight.id} className={styles.dayPlanItem__content}>
          <div className={styles.dayPlanItem__contentHeader}>
            <h5>{highlight.day}</h5>
            <div className={styles.dayPlanItem__contentHeaderInfo}>
              <div className={styles.dayPlanItem__contentHeaderDirection}>
                <img src="/direction.svg" alt="direction" />
                <span>{highlight.directionTime}</span>
              </div>
              <Button basic>
                <img src="/dots-btn.svg" alt="dots" />
              </Button>
            </div>
          </div>
          {highlight.highlightsItems.map((item) => (
            <div key={item.id} className={styles.dayPlanItem__contentMain}>
              <div className={styles.dayPlanItem__contentMainItem}>
                <div className={styles.dayPlanItem__contentMainImg}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.dayPlanItem__contentMainInfo}>
                  <h5>{item.name}</h5>
                  {item.curatorPick && (
                    <span className={styles.dayPlanItem__contentMainPick}>
                      Curator’s pick
                    </span>
                  )}
                  {item.info && (
                    <div className={styles.dayPlanItem__contentMainAbout}>
                      {item.info.map((info, index) => (
                        <span key={index}>{info}</span>
                      ))}
                    </div>
                  )}
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
          ))}
        </div>
      ))}
    </div>
  );
};
