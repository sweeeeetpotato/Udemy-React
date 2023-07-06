import React from "react";
import styles from "./header.module.css";

const HomeHeader = () => {
  return (
    <header className={styles.home_header}>
      <h1 className={styles.title}>구독 리스트</h1>
    </header>
  );
};

const DetailHeader = () => {
  return (
    <header>
      <h1>카페 여기</h1>
    </header>
  );
};

export { HomeHeader, DetailHeader };
