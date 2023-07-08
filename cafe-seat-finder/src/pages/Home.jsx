import React, { useEffect, useState } from "react";
import { HomeHeader } from "components/header/Header";
import Landing from "components/landing/Landing";
import CafeList from "components/cafeList/CafeList";

export default function Home() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    // 2초 후에 showLandingPage를 false로 업데이트하여 랜딩 페이지를 숨김
    const timer = setTimeout(() => {
      setShowLandingPage(false);
    }, 2000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리(cleanup)
  }, []);


  return (
    <>
      {showLandingPage ? (
        <Landing />
      ) : (
        <>
          <HomeHeader />
          <CafeList />
        </>
      )}
    </>
  );
}
