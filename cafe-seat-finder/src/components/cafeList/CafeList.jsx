import React from "react";
import styles from "./cafeList.module.css";
import { useNavigate } from "react-router-dom";
import filledHeart from "assets/filled-heart.svg";
import emptyHeart from "assets/empty-heart.svg";
import useCafesAPI from "useCafesAPI";

export default function CafeList() {
  const navigate = useNavigate();
  const { cafeList, loading, error } = useCafesAPI();

  const handleCafeClick = (cafeId) => {
    navigate(`/detail/${cafeId}`);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!loading && (
        <main className={styles.main}>
          {cafeList.map((cafe) => (
            <article
              className={styles.container}
              key={cafe.id}
              onClick={() => handleCafeClick(cafe.id)}
            >
              <img
                src={cafe.img}
                alt="카페 이미지"
                className={styles.cafe_img}
              />
              <div className={styles.wrapper}>
                <h3 className={`${styles.ellipsis} ${styles.cafe_name}`}>
                  {cafe.name}
                </h3>
                <p className={`${styles.ellipsis} ${styles.cafe_address}`}>
                  {cafe.address}
                </p>
              </div>
              <button className={styles.subscribe_btn}>
                <img src={filledHeart} alt="카페 구독 버튼" />
              </button>
            </article>
          ))}
        </main>
      )}
    </>
  );
}
