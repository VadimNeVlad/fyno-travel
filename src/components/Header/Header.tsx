import React from "react";
import TripDropdown from "../TripDropdown/TripDropdown";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <TripDropdown />
      <Link to="/">
        <Button>
          <img src="/plus-small.svg" alt="plus-small" /> Create
        </Button>
      </Link>
    </div>
  );
};

export default Header;
