import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import styles from "./cafeList.module.css";
import { useNavigate } from "react-router-dom";
import filledHeart from "assets/filled-heart.svg";
import emptyHeart from "assets/empty-heart.svg";

export default function CafeList() {
  const navigate = useNavigate();
  const [cafeList, setCafeList] = useState([]);

  useEffect(() => {
    const getCities = async (firestore) => {
      const cafes = collection(firestore, "cafes");
      const cafesDocs = await getDocs(cafes);
      setCafeList(cafesDocs.docs.map((doc) => doc.data()));
      console.log(cafeList);
    };
    getCities(firestore);
  }, []);

  const handleCafeClick = () => {
    navigate("/detail");
  };

  return (
    <main className={styles.main}>
      {cafeList.map((cafe) => (
        <article
          className={styles.container}
          key={cafe.name}
          onClick={handleCafeClick}
        >
          <img src={cafe.img} alt="카페 이미지" className={styles.cafe_img} />
          <div className={styles.wrapper}>
            <h3 className={`${styles.ellipsis} ${styles.cafe_name}`}>{cafe.name}</h3>
            <p className={`${styles.ellipsis} ${styles.cafe_address}`}>{cafe.address}</p>
          </div>
          <button className={styles.img_btn}>
            <img src={filledHeart} alt="카페 구독 버튼" />
          </button>
        </article>
      ))}
    </main>
  );
}
