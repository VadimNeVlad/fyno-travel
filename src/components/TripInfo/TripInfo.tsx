import React from "react";
import TripGallery from "../TripGallery/TripGallery";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TripDescription from "../TripDescription/TripDescription";
import TripInfoHighlights from "../TripInfoHighlights/TripInfoHighlights";

const TripInfo: React.FC = () => {
  return (
    <div className="tripInfo">
      <TripGallery />
      <TripDescription />
      <TripInfoHighlights />
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={16}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundColor: "red",
              width: "216px",
              height: "300px",
            }}
          >
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: "red", width: "216px", height: "300px" }}
          >
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: "red", width: "216px", height: "300px" }}
          >
            slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: "red", width: "216px", height: "300px" }}
          >
            slide 4
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default TripInfo;
