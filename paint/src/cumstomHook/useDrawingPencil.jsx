import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawPencil } from "redux_toolkit/drawingSlice";

export const useDrawingPencil = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const pencils = useSelector((state) => state.drawing.pencils);
  const [position, setPosition] = useState([]);
  const [drawing, setDrawing] = useState(false);

  const pencilMouseEvents = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const dot = {
      x: offsetX,
      y: offsetY,
      color: currentColor,
    };

    if (event.type === "mousedown") {
      setDrawing(true);
    } else if (event.type === "mouseup" && drawing) {
      setDrawing(false);
      setPosition([]);
      dispatch(drawPencil(position));
    } else if (event.type === "mousemove" && drawing) {
      setPosition([...position, dot]);
    }
  };

  const pencilDraw = (context) => {
    pencils.forEach((pencil, row) => {
      pencil.forEach((dot, col) => {
        context.beginPath();
        context.moveTo(dot.x, dot.y);

        pencils[row][col + 1] &&
          context.lineTo(pencils[row][col + 1].x, pencils[row][col + 1].y);
        context.strokeStyle = dot.color;
        context.lineWidth = 2;
        context.stroke();
      });
    });
    
    position.forEach((dot, idx) => {
      context.beginPath();
      context.moveTo(dot.x, dot.y);

      position[idx + 1] &&
        context.lineTo(position[idx + 1].x, position[idx + 1].y);
      context.strokeStyle = dot.color;
      context.lineWidth = 2;
      context.stroke();
    });
  };

  return { pencilMouseEvents, pencilDraw };
};
