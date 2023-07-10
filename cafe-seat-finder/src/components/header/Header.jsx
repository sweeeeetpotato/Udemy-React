import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCafesAPI from "customHook/useCafesAPI";
import styles from "./header.module.css";
import login_logo from "assets/login-logo.svg";
import leftArrow from "assets/left-arrow.svg";
import insta from "assets/insta-logo.svg";
import filledHeart from "assets/filled-heart.svg";
import emptyHeart from "assets/empty-heart.svg";
import addIcon from "assets/add-btn.svg";

const LoginHeader = () => {
  return (
    <header className={styles.login_header}>
      <h1 className="txt-hide">로그인 페이지</h1>
      <img
        src={login_logo}
        alt="로그인 페이지 로고"
        className={styles.login_logo}
      />
    </header>
  );
};

const HomeHeader = () => {
  return (
    <header className={styles.home_header}>
      <h1 className={styles.title}>구독 리스트</h1>
      <button className={styles.add_btn}>
        <img src={addIcon} alt="구독 추가 아이콘" />
      </button>
    </header>
  );
};

const DetailHeader = () => {
  const navigate = useNavigate();
  const { cafeList, loading, error } = useCafesAPI();
  const { cafeId } = useParams();
  const filteredCafe = cafeList.filter((cafe) => cafe.id === Number(cafeId));
  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!loading && (
        <header className={styles.detail_header}>
          <button
            className={`${styles.img_btn} ${styles.back_btn}`}
            onClick={handleBackBtn}
          >
            <img
              src={leftArrow}
              alt="뒤로가기 버튼"
              className={styles.btn_img}
            />
          </button>
          <h1 className={styles.title}>{filteredCafe[0].name}</h1>
          <div className={styles.btn_wrapper}>
            {filteredCafe[0].instagram && (
              <Link
                to={filteredCafe[0].instagram}
                target="blank"
                className={styles.img_btn}
              >
                <img
                  src={insta}
                  alt="인스타 아이콘 버튼"
                  className={styles.btn_img}
                />
              </Link>
            )}
            <button className={`${styles.img_btn} ${styles.subscribe_btn}`}>
              <img
                src={filledHeart}
                alt="구독하기 버튼"
                className={styles.btn_img}
              />
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export { LoginHeader, HomeHeader, DetailHeader };
