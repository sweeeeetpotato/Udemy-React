import React from "react";
import styles from "./loginInput.module.css";

export default function LoginInput() {
  return (
    <main className={styles.main}>
      <form action="" className={styles.form}>
        <label htmlFor="email" className="txt-hide">
          이메일
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className={`${styles.email_input} ${styles.input}`}
        />
        <label htmlFor="pw" className="txt-hide">
          비밀번호
        </label>
        <input
          type="password"
          name="pw"
          id="pw"
          placeholder="password"
          className={`${styles.pw_input} ${styles.input}`}
        />
        <button type="submit" className={`${styles.login_btn} ${styles.btn}`}>
          Login
        </button>
        <button type="button" className={`${styles.google_btn} ${styles.btn}`}>
          <div className={styles.google_logo} />
          Login with Google
        </button>
      </form>
    </main>
  );
}
