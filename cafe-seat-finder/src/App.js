import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "components/detail/Detail";
import "common/reset.css";
import "common/style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/datail" element={<Detail />}></Route>
    </Routes>
  );
}
export default App;
