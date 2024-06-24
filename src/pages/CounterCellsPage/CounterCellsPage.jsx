import React, {useContext, useEffect, useRef, useState} from "react";
import "./counter-cells-page.css";
import VideoCamIcon from '@mui/icons-material/Videocam';
import {InputTextFilled} from "../../components/Inputs/InputTextFilled/InputTextFilled.jsx";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";
import {ButtonUnFilled} from "../../components/Buttons/ButtonUnFilled/ButtonUnFilled.jsx";
import {OurSkeleton} from "../../components/Skeleton/OurSkeleton/OurSkeleton.jsx";
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';
import {CounterCellsContext} from "../../context/CounterCellsContext.jsx";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import {OurCarousel} from "../../components/OurCarousel/OurCarousel.jsx";
import {CounterCellsDataGrid} from "./CounterCellsDataGrid/CounterCellsDataGrig.jsx";
import TableChartIcon from '@mui/icons-material/TableChart';
import Webcam from "react-webcam";
import {plotImageOnCanvas} from "./utils/plotImageOnCanvas.js";

export const CounterCellsPage = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const counterCells = useState({});
    const websocketRef = useRef(null);
    const {isWebcamOpen, turnOnWebcam} = useContext(CounterCellsContext);
    const intervalIdRef = useRef(null);
    const webSocketUrl = 'ws://localhost:8000/v1/white-blood-cells/track/ws';

    useEffect(() => {
        if (isWebcamOpen) {
            startStreaming();
        } else {
            stopStreaming();
        }

        return () => {
            stopStreaming();
        };
    }, [isWebcamOpen]);

    const startStreaming = () => {
        websocketRef.current = new WebSocket(webSocketUrl);

        websocketRef.current.onopen = () => {
            console.log('Conexão WebSocket estabelecida');
        };

        websocketRef.current.onmessage = (event) => {
            const yolo_json_data = JSON.parse(event.data);
            const imageSrc = webcamRef.current.getScreenshot({width: 1080, height: 1080});
            if (imageSrc && imageSrc.startsWith("data:image/jpeg;base64,")) {
                plotImageOnCanvas(canvasRef, imageSrc, yolo_json_data);
            }
        };

        websocketRef.current.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        websocketRef.current.onclose = () => {
            console.log('Conexão WebSocket fechada');
        };

        intervalIdRef.current = setInterval(() => {
            const imageSrc = webcamRef.current.getScreenshot(
                {width: 640, height: 640}
            );

            if (imageSrc && imageSrc.startsWith("data:image/jpeg;base64,")) {
                websocketRef.current.send(imageSrc);
            }
        }, 300);
    };

    const stopStreaming = () => {
        if (websocketRef.current) {
            websocketRef.current.close();
        }
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }
    };

    return (
        <div
            className={"counter-cells-page"}

        >
            <div
                className={"counter-cells-page__header"}
            >
                <div
                    className={"header__title"}
                >
                    <h1>
                        Contador Diferencial
                    </h1>
                </div>
                <div
                    className={"header__cam-icon"}
                >
                    <VideoCamIcon/>
                </div>
            </div>
            <div
                className={"counter-cells-page__actions"}
            >
                <div
                    className={"actions__inputs"}
                >
                    <div>
                        <InputTextFilled
                            id="identificador"
                            label="Identificador"
                            size="small"
                        />
                    </div>
                    <div>
                        <InputTextFilled
                            id="counter-lomit"
                            label="Limite Contagem"
                            size="small"
                        />
                    </div>
                </div>
                <div
                    className={"header__buttons"}
                >
                    <div>
                        <ButtonUnFilled
                            variant="contained"
                            id={"button-save"}
                            text={"Salvar"}
                            startIcon={<SaveIcon/>}
                            alt={"botão para salvar"}
                            disabled={!isWebcamOpen}
                        />
                    </div>
                    <div>
                        <ButtonUnFilled
                            variant="contained"
                            id={"button-refresh-or-start"}
                            text={
                                isWebcamOpen ?
                                    "Reiniciar"
                                    :
                                    "Iniciar"
                            }
                            startIcon={
                                isWebcamOpen ?
                                    <ReplayCircleFilledIcon/>
                                    :
                                    <PlayCircleFilledWhiteIcon/>
                            }
                            alt={"botão para iniciar ou reiniciar contagem"}
                            functionOnClick={turnOnWebcam}
                        />
                    </div>
                </div>
            </div>
            <div
                className={"counter-cells-page__data"}
            >
                <div
                    className={"data_cam-image"}
                >
                    {
                        !isWebcamOpen ?
                            <OurSkeleton
                                id={"cam-skeleton"}
                                icon={<VideoCamOffIcon/>}
                            />
                            :
                            <div
                                className={"data_cam-image__image-zone"}
                            >
                                <Webcam
                                    audio={false}
                                    className={"image-zone__webcam"}
                                    ref={webcamRef}
                                    screenshotFormat={"image/jpeg"}
                                    videoConstraints={
                                        {
                                            facingMode: "environment"
                                        }
                                    }
                                >
                                </Webcam>
                                <canvas
                                    ref={canvasRef}
                                    className={"image-zone__canvas"}
                                >

                                </canvas>
                            </div>

                    }
                </div>
                <div
                    className={"data_table"}
                >
                    {
                        !isWebcamOpen ?
                            <OurSkeleton
                                id={"date-table"}
                                icon={<TableChartIcon/>}
                            />
                            :
                            <CounterCellsDataGrid/>
                    }
                </div>
            </div>
            <div
                className={"counter-cells-page__image-log"}
            >
                <div
                    className={"image-log__carousel"}
                >
                    <div>
                        <OurCarousel
                            deviceType={"desktop"}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};