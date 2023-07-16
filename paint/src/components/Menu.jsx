import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawingMode, reset } from "redux_toolkit/drawingSlice";
import Colors from "./Colors";
import pencilIcon from "assets/pencil.png";
import lineIcon from "assets/line.png";
import dotIcon from "assets/dot.png";

export default function Menu() {
  const dispatch = useDispatch();
  const selectedMode = useSelector((state) => state.drawing.drawingMode);
  const btnCommonStyle =
    "w-12 h-12 rounded cursor-point outline outline-offset-2 ";

  const handleBtn = (mode) => {
    mode === "reset" ? dispatch(reset()) : dispatch(drawingMode(mode));
  };

  const btnStyle = (mode) => {
    let selectedBtnStyle = btnCommonStyle;
    selectedBtnStyle +=
      selectedMode === mode
        ? "outline-2 outline-black"
        : "outline-1 outline-gray-500";

    return selectedBtnStyle;
  };

  return (
    <nav className="h-32 flex gap-10 items-center justify-center p-6 box-border border-b-2 border-solid border-gray-400">
      <button
        type="button"
        className={`${btnCommonStyle} ${btnStyle("dot")}`}
        onClick={() => handleBtn("dot")}
      >
        <img src={dotIcon} alt="점" />
      </button>
      <button
        type="button"
        className={`${btnCommonStyle} ${btnStyle("line")}`}
        onClick={() => handleBtn("line")}
      >
        <img src={lineIcon} alt="선" />
      </button>
      <button
        type="button"
        className={`${btnCommonStyle} ${btnStyle("pencil")}`}
        onClick={() => handleBtn("pencil")}
      >
        <img src={pencilIcon} alt="연필" />
      </button>
      <button
        type="button"
        className={`${btnCommonStyle} outline-1 active:bg-red-300 active:outline-2 active: outline-red-500`}
        onClick={() => handleBtn("reset")}
      >
        리셋
      </button>
      <Colors />
    </nav>
  );
}
