import React, {useContext} from 'react';
import "./counter-cells-page.css";
import VideoCamIcon from '@mui/icons-material/Videocam';
import {InputTextFilled} from "../../components/Inputs/InputTextFilled/InputTextFilled.jsx";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";
import {ButtonUnFilled} from "../../components/Buttons/ButtonUnFilled/ButtonUnFilled.jsx";
import {OurSkeleton} from "../../components/Skeleton/OurSkeleton/OurSkeleton.jsx";
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import {CounterCellsDataGrid} from "./CounterCellsDataGrid/CounterCellsDataGrig.jsx";
import TableChartIcon from '@mui/icons-material/TableChart';
import Webcam from "react-webcam";
import CancelIcon from '@mui/icons-material/Cancel';
import {CounterCellsContext} from "../../context/CounterCellsContext.jsx";
import {OurImageList} from "../../components/ImageList/OurImageList/OurImageList.jsx";

export const CounterCellsPage = () => {
    const {
        isWebsocketOpen,
        toggleWebsocketConnection,
        resetPersist,
        outputCellCount,
        showWebcam,
        toggleShowWebcam,
        webcamRef,
        canvasRef,
        resetModelPersist
    } = useContext(CounterCellsContext);

    return (<div className={"counter-cells-page"}>
        <div className={"counter-cells-page__header"}>
            <div className={"header__title"}>
                <h1>Contador Diferencial</h1>
            </div>
            <div className={"header__cam-icon"}>
                <VideoCamIcon/>
            </div>
        </div>
        <div className={"counter-cells-page__actions"}>
            <div className={"actions__inputs"}>
                <div>
                    <InputTextFilled id="identificador" label="Identificador" size="small"/>
                </div>
                <div>
                    <InputTextFilled id="counter-lomit" label="Limite Contagem" size="small"/>
                </div>
            </div>
            <div className={"header__buttons"}>
                <div>
                    <ButtonUnFilled
                        variant="contained"
                        id={"button-save"}
                        text={"Salvar"}
                        startIcon={<SaveIcon/>}
                        alt={"botão para salvar"}
                        disabled={!isWebsocketOpen}
                    />
                </div>
                <div>
                    <ButtonUnFilled
                        variant="contained"
                        id={"button-reset"}
                        text={"Reiniciar"}
                        startIcon={<ReplayCircleFilledIcon/>}
                        alt={"botão para reiniciar contagem"}
                        disabled={!isWebsocketOpen}
                        functionOnClick={resetModelPersist}
                    />
                </div>
                <div>
                    <ButtonUnFilled
                        variant="contained"
                        id={"button-refresh-or-start"}
                        text={isWebsocketOpen ? "Fechar" : "Iniciar"}
                        startIcon={isWebsocketOpen ? <CancelIcon/> : <PlayCircleFilledWhiteIcon/>}
                        alt={"botão para iniciar ou reiniciar contagem"}
                        functionOnClick={toggleWebsocketConnection}
                    />
                </div>
            </div>
        </div>
        <div className={"counter-cells-page__data"}>
            <div className={"data_cam-image"}>
                {!isWebsocketOpen ? (<OurSkeleton id={"cam-skeleton"} icon={<VideoCamOffIcon/>}/>) : (
                    <div className={"data_cam-image__image-zone"}>
                        <Webcam
                            audio={false}
                            className={"image-zone__webcam--open"}
                            ref={webcamRef}
                            screenshotFormat={"image/jpeg"}
                            videoConstraints={
                                {
                                    facingMode: "environment",
                                    width: 2500,
                                }
                            }
                        />
                        <canvas ref={canvasRef} className={"image-zone__canvas"}/>
                    </div>)}
            </div>
            <div className={"data_table"}>
                {!isWebsocketOpen ? (<OurSkeleton id={"date-table"} icon={<TableChartIcon/>}/>) : (
                    <CounterCellsDataGrid data={outputCellCount}/>)}
            </div>
        </div>
        <div className={"counter-cells-page__image-log"}>
            <div className={"image-log__image-list"}>
                <OurImageList
                    itemData={
                        outputCellCount["images"] ?
                            outputCellCount["images"]
                            :
                            []
                    }
                />
            </div>
        </div>
    </div>);
};
