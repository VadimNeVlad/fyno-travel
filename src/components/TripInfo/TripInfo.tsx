import React from "react";
import TripGallery from "../TripGallery/TripGallery";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TripDescription from "../TripDescription/TripDescription";

const TripInfo: React.FC = () => {
  return (
    <div className="tripInfo">
      <TripGallery />
      <TripDescription />
    </div>
  );
};

export default TripInfo;
