// Firebase SDK
import { initializeApp } from "firebase/app";
// 실시간 데이터베이스를 사용하기위해
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB1G9VMxbJdjtlj3wByp0gVCCDBP_FHVjY",
  authDomain: "cafe-seat-finder.firebaseapp.com",
  projectId: "cafe-seat-finder",
  storageBucket: "cafe-seat-finder.appspot.com",
  messagingSenderId: "225485985690",
  appId: "1:225485985690:web:292e8ba3493c01d6b44c23",
};

// firebaseConfig 정보로 firebase 시작
// firebase의 firestore 인스턴스를 변수에 저장
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
