import React from "react";
import { ButtonProps } from "../../utils/types/props";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  children,
  isBlur,
  basic,
  mdRadiusBorder,
  transparent,
}) => {
  return (
    <button
      className={`${styles.btn} ${isBlur ? styles.blur : ""} ${
        basic ? styles.basic : ""
      } ${mdRadiusBorder ? styles.mdRadiusBorder : ""} ${
        transparent ? styles.transparent : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
