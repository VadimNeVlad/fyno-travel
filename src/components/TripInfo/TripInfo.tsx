import React from "react";
import TripGallery from "../TripGallery/TripGallery";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TripInfo: React.FC = () => {
  return (
    <div className="tripInfo">
      <TripGallery />
    </div>
  );
};

export default TripInfo;
