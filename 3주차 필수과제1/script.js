// 배경 이미지 클릭시 랜덤 변경
let firstBackImg = Math.floor(Math.random() * 7) + 1;
const backImg = document.getElementById("main");

backImg.style.background = `url('images/background${firstBackImg}.jpg') no-repeat center`;
backImg.style.backgroundSize = "cover";

const changeImagesHandler = (event) => {
  // main 요소를 클릭했을 때만 배경화면 바뀌도록 예외처리
  // 이렇게 안하면 main 내부 태그들을 클릭시에도 배경화면이 바뀜
  if (event.target.id === "main") {
    let randomImg = Math.floor(Math.random() * 7) + 1;
    backImg.style.backgroundImage = `url('images/background${randomImg}.jpg')`;
  }
};

// 실시간 날씨
const weather = document.getElementById("weather");
const API_KEY = "6e425088257be0a1df03bd179e337c0f";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temp = json.main.temp;
      const humidity = json.main.humidity;
      weather.textContent = `${temp}℃ @ ${humidity}%`;
    });
}

function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("error");
}

function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();

// 실시간 날짜
const dateSpan = document.createElement("span");
const daySpan = document.createElement("span");
const date = new Date();

const currentDate = () => {
  const dayArr = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
  const year = String(date.getFullYear()).slice(2, 4);
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const current_date = String(date.getDate()).padStart(2, 0);
  const dayIndex = date.getDay();

  dateSpan.textContent = `${year}.${month}.${current_date}`;
  daySpan.textContent = dayArr[dayIndex];
};
document.getElementById("date").appendChild(dateSpan);
document.getElementById("date").appendChild(daySpan);
setInterval(currentDate, 100);

// 실시간 시계
const currentTime = () => {
  const hour = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);

  document.getElementById("clock").textContent = `${hour}:${minutes}`;
};
setInterval(currentTime, 100);

// 인사말
let greeting = "";
if (date.getHours() > 20 || date.getHours() < 6) {
  greeting = "Good Night";
} else if (date.getHours() > 16) {
  greeting = "Good Evening";
} else if (date.getHours() > 11) {
  greeting = "Good Afternoon";
} else if (date.getHours() > 5) {
  greeting = "Good Morning";
}
document.getElementById("greetings").textContent = `${greeting}, seyeong`;

// to do list
const handleOnKeyDown = (event) => {
  if (event.key === "Enter") {
    const toDoList = document.createElement("li");
    toDoList.style.fontSize = "1.2rem";
    toDoList.style.marginTop = "20px";
    toDoList.style.cursor = "pointer";
    toDoList.textContent = event.target.value;
    document.getElementById("toDoList").appendChild(toDoList);
    document.getElementById("list-input").value = "";

    // 추가된 목록 클릭시 삭제
    toDoList.onclick = () => {
      toDoList.remove();
    };
  }
};
