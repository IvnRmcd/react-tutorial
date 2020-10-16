import React from "react";
import styles from "./Menu.module.css";

const menu = (props) => {
  return (
    <div onClick={props.click} className={styles.Menu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default menu;
