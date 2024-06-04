import React from "react";
import { ButtonProps } from "../../utils/types/props";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
