import React, { useRef } from "react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import TripItinerary from "../components/TripItinerary/TripItinerary";
import RegionList from "../components/RegionList/RegionList";
import TripGallery from "../components/TripGallery/TripGallery";
import TripDescription from "../components/TripDescription/TripDescription";
import TripInfoHighlights from "../components/TripInfoHighlights/TripInfoHighlights";

const Home: React.FC = () => {
  const ref = useRef(null);

  return (
    <Container>
      <Header />
      <TripGallery />
      <TripDescription elRef={ref} />
      <TripInfoHighlights />
      <TripItinerary />
      <div ref={ref}>
        <RegionList />
      </div>
    </Container>
  );
};

export default Home;
