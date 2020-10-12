import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";

const sideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <Logo height="11%" margin="30px" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
