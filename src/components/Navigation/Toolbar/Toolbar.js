import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Logo />
      <div>Menu</div>
      <nav>...</nav>
    </header>
  );
};

export default toolbar;
