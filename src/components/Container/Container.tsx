import React from "react";
import { ContainerProps } from "../../utils/types/props";
import styles from "./Container.module.scss";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
