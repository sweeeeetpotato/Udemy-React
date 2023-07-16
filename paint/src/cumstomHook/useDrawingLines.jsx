import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawLines } from "redux_toolkit/drawingSlice";

export const useDrawingLines = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const lines = useSelector((state) => state.drawing.lines);
  const [drawing, setDrawing] = useState(false);
  const [linesDrawn, setLinesDrawn] = useState([]);
  
  const lineMouseEvents = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const point = {
      x: offsetX,
      y: offsetY,
    };

    if (event.type === "mousedown") {
      setDrawing(true);
      setLinesDrawn([
        {
          start: point,
          end: point,
          color: currentColor,
        },
      ]);
    } else if (event.type === "mouseup" && drawing) {
      setDrawing(false);
      dispatch(drawLines(...linesDrawn));
      setLinesDrawn([]);
    } else if (event.type === "mousemove" && drawing) {
      setLinesDrawn((prevLines) => {
        const updatedLines = [...prevLines];
        updatedLines[0] = { ...updatedLines[0], end: point };
        return updatedLines;
      });
    }
  };

  const lineDraw = (context) => {
    const drawLine = (line) => {
      context.beginPath();
      context.moveTo(line.start.x, line.start.y);
      context.lineTo(line.end.x, line.end.y);
      context.strokeStyle = line.color;
      context.lineWidth = 2;
      context.stroke();
    };
    lines.forEach((line) => drawLine(line));
    linesDrawn.forEach((line) => drawLine(line));
  };

  return { lineMouseEvents, lineDraw };
};
