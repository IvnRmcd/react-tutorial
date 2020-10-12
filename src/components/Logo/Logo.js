import React from "react";
import Logo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = (props) => {
  return (
    <div
      className={styles.Logo}
      style={{ height: props.height, marginBottom: props.margin }}
    >
      <img src={Logo} alt="My Burger" />
    </div>
  );
};

export default logo;
