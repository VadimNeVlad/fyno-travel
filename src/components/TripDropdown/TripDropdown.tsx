import React, { useState } from "react";
import Select from "react-select";
import styles from "./TripDropdown.module.scss";

const options = [
  { value: "5", label: "5 days" },
  { value: "6", label: "6 days" },
  { value: "7", label: "7 days" },
  { value: "8", label: "8 days" },
  { value: "9", label: "9 days" },
  { value: "10", label: "10 days" },
];

const TripDropdowm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={styles.tripDropdown}>
      <div className={styles.tripDropdown__item}>
        <p>Trips</p>
      </div>
      <div className={styles.tripDropdown__item}>
        <p>Iceland</p>
      </div>
      <div className={styles.tripDropdown__item}>
        <Select
          classNamePrefix="tripDropdownSelect"
          defaultValue={selectedOption}
          options={options}
          onChange={(e) =>
            setSelectedOption(e as { value: string; label: string })
          }
        />
      </div>
    </div>
  );
};

export default TripDropdowm;
