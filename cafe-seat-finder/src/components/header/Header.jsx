import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCafesAPI from "useCafesAPI";
import styles from "./header.module.css";
import leftArrow from "assets/left-arrow.svg";
import insta from "assets/insta-logo.svg";
import filledHeart from "assets/filled-heart.svg";
import emptyHeart from "assets/empty-heart.svg";

const HomeHeader = () => {
  return (
    <header className={styles.home_header}>
      <h1 className={styles.title}>구독 리스트</h1>
    </header>
  );
};

const DetailHeader = () => {
  const navigate = useNavigate();
  const { cafeList, loading } = useCafesAPI();
  const { cafeId } = useParams();
  const filteredCafe = cafeList.filter((cafe) => cafe.id === Number(cafeId));
  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    !loading && (
      <header className={styles.detail_header}>
        <button
          className={`${styles.img_btn} ${styles.back_btn}`}
          onClick={handleBackBtn}
        >
          <img src={leftArrow} alt="뒤로가기 버튼" className={styles.btn_img} />
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
    )
  );
};

export { HomeHeader, DetailHeader };
