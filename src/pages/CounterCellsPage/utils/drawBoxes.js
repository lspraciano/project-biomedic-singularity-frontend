export const drawBoxes = (
    canvasRef,
    yolo_json_data
) => {
    let detectionCrossedLine = false;
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const colors = new Colors();
    const classNamesDict = yolo_json_data["class_name_list"];
    const classNamesList = Object.values(classNamesDict)
    const outputDictionary = {};
    const middleY = canvasHeight / 2;
    const lineThickness = 3;
    const lineStartX = canvasWidth * 0.04;
    const lineEndX = canvasWidth * 0.96;

    classNamesList.forEach(
        name => {
            outputDictionary[name] = new Set();
        }
    );

    canvasContext.beginPath();
    canvasContext.moveTo(lineStartX, middleY);
    canvasContext.lineTo(lineEndX, middleY);
    canvasContext.strokeStyle = '#48F90A';
    canvasContext.lineWidth = 3;
    canvasContext.stroke();

    yolo_json_data["xyxyn"].forEach(
        (detection, index) => {
            const [x1, y1, x2, y2] = detection;
            const bboxX1 = x1 * canvasWidth;
            const bboxY1 = y1 * canvasHeight;
            const bboxX2 = x2 * canvasWidth;
            const bboxY2 = y2 * canvasHeight;
            const classId = yolo_json_data["detect_class_id_list"][index];
            const trackId = yolo_json_data["track_id_list"][index];
            const className = classNamesDict[classId];
            const classConf = yolo_json_data["detect_object_confidence_list"][index].toFixed(2);

            const bboxWidth = bboxX2 - bboxX1;
            const bboxHeight = bboxY2 - bboxY1;

            const bboxText = `${trackId} | ${className} | ${classConf}`
            const textWidth = canvasContext.measureText(bboxText).width;
            const textX = (bboxX1 + (bboxWidth - textWidth) / 2);
            const textY = bboxY1 - 10;


            canvasContext.strokeStyle = colors.get(classId);
            canvasContext.font = "16px Arial";
            canvasContext.fillStyle = "black";
            canvasContext.lineWidth = 3;
            canvasContext.fillText(bboxText, textX, textY);
            canvasContext.strokeRect(bboxX1, bboxY1, bboxWidth, bboxHeight);

            const centerX = bboxX1 + bboxWidth / 2;
            const lineTopY = middleY - lineThickness / 2;
            const lineBottomY = middleY + lineThickness / 2;

            if (centerX >= lineStartX && centerX <= lineEndX) {
                if ((bboxY1 < middleY && bboxY2 > middleY) ||
                    (bboxY1 < lineTopY && bboxY2 > lineBottomY) ||
                    (bboxY1 < lineBottomY && bboxY2 > lineTopY)) {
                    canvasContext.strokeStyle = '#48F90A';
                    canvasContext.strokeRect(bboxX1, bboxY1, bboxWidth, bboxHeight);
                    outputDictionary[className].add(trackId);
                    detectionCrossedLine = true;
                }
            }

        }
    );


    return detectionCrossedLine ? outputDictionary : null
};

class Colors {
    constructor() {
        this.palette = [
            "#FF3838",
            "#FF9D97",
            "#FF701F",
            "#FFB21D",
            "#CFD231",
            "#48F90A",
            "#92CC17",
            "#3DDB86",
            "#1A9334",
            "#00D4BB",
            "#2C99A8",
            "#00C2FF",
            "#344593",
            "#6473FF",
            "#0018EC",
            "#8438FF",
            "#520085",
            "#CB38FF",
            "#FF95C8",
            "#FF37C7",
        ];
        this.n = this.palette.length;
    }

    get = (i) => this.palette[Math.floor(i) % this.n];

    static hexToRgba = (hex, alpha) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? `rgba(${[parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(
                ", "
            )}, ${alpha})`
            : null;
    };
}