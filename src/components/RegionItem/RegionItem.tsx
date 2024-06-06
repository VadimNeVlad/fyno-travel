import React from "react";
import style from "./RegionItem.module.scss";
import Button from "../Button/Button";
import RegionHighlightsItem from "../RegionHighlightsItem/RegionHighlightsItem";
import { RegionItemProps } from "../../utils/types/props";

const RegionItem: React.FC<RegionItemProps> = ({ region }) => {
  return (
    <div className={style.regionItem}>
      <div className={style.regionItem__wrap}>
        <div
          className={`${style.regionItem__label} ${style.regionItem__labelActive}`}
        >
          {region.label}
        </div>
        <div className={style.regionItem__header}>
          <h4>{region.name}</h4>
          {region.info && (
            <div className={style.regionItem__headerInfo}>
              {region.info.map((info, index) => (
                <span key={index}>{info}</span>
              ))}
            </div>
          )}
        </div>
        <p>{region.description}</p>
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
        <RegionHighlightsItem list={region.regionHighlights} />
        <div className={style.regionItem__stayInfo}>
          <div
            className={`${style.regionItem__label} ${style.regionItem__labelDot}`}
          >
            <img src="/bed-small.svg" alt="bed" />
          </div>
          <h5>Where to stay</h5>
        </div>
      </div>
      {region.regionPlaces && (
        <div className={style.regionItem__stayContentWrap}>
          <RegionHighlightsItem list={region.regionPlaces} isReviewType />
        </div>
      )}
    </div>
  );
};

export default RegionItem;
