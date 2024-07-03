import {drawBoxes} from "./drawBoxes.js";

export const plotImageOnCanvas = (
    canvasRef,
    imageSrc,
    yolo_json_data,
    outputCellCount
) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    return drawBoxes(canvasRef, yolo_json_data, outputCellCount, imageSrc);
};