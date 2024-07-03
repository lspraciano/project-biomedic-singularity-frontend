export const handleSaveRegions = (
    imageSrc,
    regionToSave
) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            const [x1, y1, x2, y2] = regionToSave;

            // Cálculo das dimensões da imagem original
            const originalWidth = img.width;
            const originalHeight = img.height;

            // Cálculo das coordenadas reais na imagem original
            const realX1 = x1 * originalWidth;
            const realY1 = y1 * originalHeight;
            const realX2 = x2 * originalWidth;
            const realY2 = y2 * originalHeight;

            // Cálculo da largura e altura originais
            const realWidth = realX2 - realX1;
            const realHeight = realY2 - realY1;

            // Fator para ajustar para quíntuplo da área
            const scaleFactor = Math.sqrt(5);

            // Cálculo das novas coordenadas para o quíntuplo da área
            const newRealX1 = Math.max(realX1 - realWidth * (scaleFactor - 1) / 2, 0);
            const newRealY1 = Math.max(realY1 - realHeight * (scaleFactor - 1) / 2, 0);
            const newRealX2 = Math.min(realX2 + realWidth * (scaleFactor - 1) / 2, originalWidth);
            const newRealY2 = Math.min(realY2 + realHeight * (scaleFactor - 1) / 2, originalHeight);

            // Cálculo da nova largura e altura
            const newRealWidth = newRealX2 - newRealX1;
            const newRealHeight = newRealY2 - newRealY1;

            // Criação de um canvas temporário
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = newRealWidth;
            tempCanvas.height = newRealHeight;
            const ctx = tempCanvas.getContext('2d');

            // Desenho da região ampliada no canvas temporário
            ctx.drawImage(img, newRealX1, newRealY1, newRealWidth, newRealHeight, 0, 0, newRealWidth, newRealHeight);

            // Retorno do dado URL da imagem ampliada
            const dataURL = tempCanvas.toDataURL();
            resolve(dataURL);
        };

        img.onerror = function (error) {
            reject(error);
        };

        img.src = imageSrc;
    });
};
