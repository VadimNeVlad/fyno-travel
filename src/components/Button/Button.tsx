import React from "react";
import { ButtonProps } from "../../utils/types/props";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({ children, isBlur }) => {
  return (
    <button className={`${styles.btn} ${isBlur && styles.blur}`}>
      {children}
    </button>
  );
};

export default Button;
