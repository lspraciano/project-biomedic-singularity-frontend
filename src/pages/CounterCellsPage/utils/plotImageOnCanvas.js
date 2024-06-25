import {drawBoxes} from "./drawBoxes.js";

const image = new Image();
export const plotImageOnCanvas = (
    canvasRef,
    imageSrc,
    yolo_json_data
) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        drawBoxes(canvasRef, yolo_json_data);
    };

    image.src = imageSrc;
};