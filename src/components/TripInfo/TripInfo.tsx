import React from "react";
import TripGallery from "../TripGallery/TripGallery";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TripDescription from "../TripDescription/TripDescription";
import TripInfoHighlights from "../TripInfoHighlights/TripInfoHighlights";

const TripInfo: React.FC = () => {
  return (
    <div className="tripInfo">
      <TripGallery />
      <TripDescription />
      <TripInfoHighlights />
    </div>
  );
};

export default TripInfo;
