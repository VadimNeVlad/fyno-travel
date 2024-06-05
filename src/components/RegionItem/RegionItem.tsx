import React from "react";
import style from "./RegionItem.module.scss";
import Button from "../Button/Button";
import RegionHighlightsItem from "../RegionHighlightsItem/RegionHighlightsItem";

const RegionItem: React.FC = () => {
  return (
    <div className={style.regionItem}>
      <div className={style.regionItem__wrap}>
        <div
          className={`${style.regionItem__label} ${style.regionItem__labelActive}`}
        >
          A
        </div>
        <div className={style.regionItem__header}>
          <h4>Golden Circle Region</h4>
          <div className={style.regionItem__headerInfo}>
            <span>Geysers</span>
            <span>Waterfalls</span>
            <span>Crater lakes</span>
          </div>
        </div>
        <p>
          The Golden Circle in Iceland is a renowned tourist route that
          encompasses an array of stunning natural landmarks within a relatively
          short distance from Reykjavík. This scenic loop includes three primary
          attractions: Þingvellir National Park, where you can explore the rift
          valley created by the diverging North American and Eurasian tectonic
          plates and witness the site of Iceland's ancient parliament.
        </p>
        <div className={style.regionItem__highlightsHeader}>
          <div
            className={`${style.regionItem__label} ${style.regionItem__labelDot}`}
          >
            <img src="/dot.svg" alt="dot" />
          </div>
          <h5>Region highlights</h5>
          <Button>
            <img src="/daily-plan.svg" alt="daily-plan" /> Show daily plan
          </Button>
        </div>
        <RegionHighlightsItem />
        <div className={style.regionItem__stayInfo}>
          <div
            className={`${style.regionItem__label} ${style.regionItem__labelDot}`}
          >
            <img src="/bed-small.svg" alt="bed" />
          </div>
          <h5>Where to stay</h5>
        </div>
      </div>
      <div className={style.regionItem__stayContentWrap}>
        <RegionHighlightsItem reviewType />
      </div>
    </div>
  );
};

export default RegionItem;
