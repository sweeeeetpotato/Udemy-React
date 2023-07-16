import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentColor } from "redux_toolkit/drawingSlice";

export default function Colors() {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.drawing.currentColor);
  const btnCommonStyle = "w-6 h-6 outline outline-offset-2 ";

  const handleColor = (color) => {
    dispatch(currentColor(color));
  };

  const btnStyle = (color) => {
    let selectedBtnStyle = btnCommonStyle;
    selectedBtnStyle +=
    selectedColor === color
        ? "outline-2 outline-black"
        : "outline-1 outline-gray-500";

    return selectedBtnStyle;
  };

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-2 gap-3">
        <button
          onClick={() => handleColor("black")}
          className={`bg-black ${btnStyle("black")}`}
        />
        <button
          onClick={() => handleColor("gray")}
          className={`bg-gray-400 ${btnStyle("gray")}`}
        />
        <button
          onClick={() => handleColor("brown")}
          className={`bg-orange-900 ${btnStyle("brown")}`}
        />
        <button
          onClick={() => handleColor("red")}
          className={`bg-red-600 ${btnStyle("red")}`}
        />
        <button
          onClick={() => handleColor("yellow")}
          className={`bg-yellow-300 ${btnStyle("yellow")}`}
        />
        <button
          onClick={() => handleColor("orange")}
          className={`bg-orange-500 ${btnStyle("orange")}`}
        />
        <button
          onClick={() => handleColor("green")}
          className={`bg-green-600 ${btnStyle("green")}`}
        />
        <button
          onClick={() => handleColor("blue")}
          className={`bg-blue-700 ${btnStyle("blue")}`}
        />
        <button
          onClick={() => handleColor("purple")}
          className={`bg-purple-600 ${btnStyle("purple")}`}
        />
        <button
          onClick={() => handleColor("white")}
          className={`bg-white ${btnStyle("white")}`}
        />
      </div>
    </>
  );
}
