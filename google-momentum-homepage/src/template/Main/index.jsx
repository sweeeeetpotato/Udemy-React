import React, { useState } from "react";
import UserNameInput from "components/UserNameInput";
import Clock from "../../components/Clock";
import ToDoList from "components/ToDoList";
import { backgroundImg } from "./imagePath";
import "../../reset.css";
import "./style.css";

export default function Main() {
  const [userName, setUserName] = useState("");
  // 배경 이미지 클릭시 랜덤 변경
  const firstBackImg = backgroundImg[Math.floor(Math.random() * 8)];
  const [backgroundStyle, setBackgroundStyle] = useState({
    background: `url(${firstBackImg}) no-repeat center`,
  });

  const handleImgChange = (e) => {
    // main 요소를 클릭했을 때만 배경화면 바뀌도록 예외처리
    // 이렇게 안하면 main 내부 태그들을 클릭시에도 배경화면이 바뀜
    if (e.target.className === "main") {
      const randomImg = backgroundImg[Math.floor(Math.random() * 8)];
      setBackgroundStyle({
        background: `url(${randomImg}) no-repeat center`,
      });
    }
  };

  return (
    <main
      className="main"
      onClick={(e) => handleImgChange(e)}
      style={backgroundStyle}
    >
      {userName === "" ? (
        <UserNameInput setUserName={setUserName} />
      ) : (
        <>
          <Clock userName={userName} setUserName={setUserName} />
          <ToDoList />
        </>
      )}
    </main>
  );
}
