import {drawBoxes} from "./drawBoxes.js";

export const plotImageOnCanvas = (
    canvasRef,
    imageSrc,
    yolo_json_data
) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();

    image.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        drawBoxes(canvasRef, yolo_json_data);
    };

    image.src = imageSrc;
};