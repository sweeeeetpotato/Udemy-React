import React from "react";
import logo from "assets/logo.svg";
import logoText from "assets/logo-text.svg";
import logoImg from "assets/logo-img.svg";
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logoText} alt="Five My Seat" className={styles.logo_text} />
        <img src={logo} alt="Five My Seat" className={styles.logo} />
      </div>
      <img src={logoImg} alt="로고 이미지" className={styles.logo_img} />
    </section>
  );
}
