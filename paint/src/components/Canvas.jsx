import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDrawingDots } from "cumstomHook/useDrawingDots";
import { useDrawingLines } from "cumstomHook/useDrawingLines";
import { useDrawingPencil } from "cumstomHook/useDrawingPencil";

export default function Canvas() {
  const drawingMode = useSelector((state) => state.drawing.drawingMode);
  const canvasRef = useRef(null);
  const { dotMouseEvents, dotDraw } = useDrawingDots();
  const { lineMouseEvents, lineDraw } = useDrawingLines();
  const { pencilMouseEvents, pencilDraw } = useDrawingPencil();

  const drawingFunctions = {
    dot: dotMouseEvents,
    line: lineMouseEvents,
    pencil: pencilMouseEvents,
  };

  const handleMouseEvents = (event) => {
    drawingFunctions[drawingMode](event);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    dotDraw(context);
    lineDraw(context);
    pencilDraw(context);
  }, [drawingMode, dotDraw, lineDraw, pencilDraw]);


  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="800"
      onMouseDown={handleMouseEvents}
      onMouseUp={handleMouseEvents}
      onMouseMove={handleMouseEvents}
      className="cursor-crosshair"
    />
  );
}
