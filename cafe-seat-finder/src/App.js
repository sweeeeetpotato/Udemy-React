import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import "common/reset.css";
import "common/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:cafeId" element={<Detail />}></Route>
    </Routes>
  );
}
export default App;
