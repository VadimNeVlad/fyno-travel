import React, { useState } from "react";
import RegionItem from "../RegionItem/RegionItem";
import { regionsMock } from "../../utils/mocks/region";

const RegionList: React.FC = () => {
  const [regions] = useState(regionsMock);

  return (
    <>
      {regions.map((region) => (
        <RegionItem key={region.id} region={region} />
      ))}
    </>
  );
};

export default RegionList;
