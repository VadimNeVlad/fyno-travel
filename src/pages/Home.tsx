import React from "react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import TripInfo from "../components/TripInfo/TripInfo";
import TripItinerary from "../components/TripItinerary/TripItinerary";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <TripInfo />
      <TripItinerary />
    </Container>
  );
};

export default Home;
