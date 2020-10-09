import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Logo />
      <div>Menu</div>
      <NavigationItems />
    </header>
  );
};

export default toolbar;
