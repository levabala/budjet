import type { Component } from "solid-js";

import styles from "./App.module.scss";

import "./firebase";

const App: Component = () => {
  return <div class={styles.App}>budjet</div>;
};

export default App;
