import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import styles from "./RegionHighlightsItem.module.scss";
import Button from "../Button/Button";
import { RegionHighlightsItemProps } from "../../utils/types/props";

const RegionHighlightsItem: React.FC<RegionHighlightsItemProps> = ({
  reviewType,
}) => {
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateButtonState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateButtonState(swiperRef.current);
      swiperRef.current.on("reachEnd", () => setIsEnd(true));
    }

    return () => {
      swiperRef.current?.off("reachEnd");
    };
  }, []);

  return (
    <div className={styles.main}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          updateButtonState(swiper);
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "216px" }}>
          <div className={styles.regionHighlightsItem}>
            <div className={styles.regionHighlightsItem__imageWrap}>
              <img src="/trip-info-2.jpg" alt="region-highlights-1" />
              <div className={styles.regionHighlightsItem__imageContent}>
                <div className={styles.regionHighlightsItem__label}>
                  Curator’s pick
                </div>
                <Button basic transparent>
                  <img src="/favorite-icon.svg" alt="favorite" />
                </Button>
              </div>
            </div>
            <div className={styles.regionHighlightsItem__infoWrap}>
              <h5>Gullfoss Waterfall</h5>
              {reviewType && (
                <div className={styles.regionHighlightsItem__review}>
                  <img src="/review-mark.svg" alt="review-mark" />
                  <strong>9.1/10</strong>
                </div>
              )}
              <div className={styles.regionHighlightsItem__info}>
                <span>1h</span>
                <span>Waterfall</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.regionHighlightsItem__arrWrap}>
        <button
          className={`${styles.regionHighlightsItem__arr} ${
            styles.regionHighlightsItem__arrPrev
          } ${isBeginning ? styles.hidden : ""}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src="/next-arr.svg" alt="arrow-next" />
        </button>
        <button
          className={`${styles.regionHighlightsItem__arr} ${
            styles.regionHighlightsItem__arrNext
          } ${isEnd ? styles.hidden : ""}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src="/next-arr.svg" alt="arrow-next" />
        </button>
      </div>
    </div>
  );
};

export default RegionHighlightsItem;
