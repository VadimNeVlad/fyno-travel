import React from "react";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import TripInfo from "../components/TripInfo/TripInfo";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <TripInfo />
    </Container>
  );
};

export default Home;
