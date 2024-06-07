import React from "react";
import RegionItem from "../RegionItem/RegionItem";
import { regionsMock } from "../../utils/mocks/region";

const RegionList: React.FC = () => {
  return (
    <>
      {regionsMock.map((region) => (
        <RegionItem key={region.id} region={region} />
      ))}
    </>
  );
};

export default RegionList;
