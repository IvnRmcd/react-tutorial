import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../../UI/Menu/Menu";

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Menu click={props.toggle} />
      <Logo height="80%" margin="0" />
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
