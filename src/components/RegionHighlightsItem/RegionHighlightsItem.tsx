import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import styles from "./RegionHighlightsItem.module.scss";
import Button from "../Button/Button";
import { RegionHighlightsItemProps } from "../../utils/types/props";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RegionHighlightsItem: React.FC<RegionHighlightsItemProps> = ({
  list,
  isReviewType,
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
    <>
      {list && (
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
            {list.map((item) => (
              <SwiperSlide key={item.id} style={{ width: "216px" }}>
                <div className={styles.regionHighlightsItem}>
                  <div className={styles.regionHighlightsItem__imageWrap}>
                    <img src={item.image} alt={item.name} />
                    <div className={styles.regionHighlightsItem__imageContent}>
                      {item.curatorPick && (
                        <div className={styles.regionHighlightsItem__label}>
                          Curator’s pick
                        </div>
                      )}
                      <Button basic transparent>
                        <img src="/favorite-icon.svg" alt="favorite" />
                      </Button>
                    </div>
                  </div>
                  <div className={styles.regionHighlightsItem__infoWrap}>
                    <h5>{item.name}</h5>
                    {isReviewType && (
                      <div className={styles.regionHighlightsItem__review}>
                        <img src="/review-mark.svg" alt="review-mark" />
                        <strong>{item.score}</strong>
                      </div>
                    )}
                    {item.info && (
                      <div className={styles.regionHighlightsItem__info}>
                        {item.info.map((info, index) => (
                          <span key={index}>{info}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
      )}
    </>
  );
};

export default RegionHighlightsItem;
