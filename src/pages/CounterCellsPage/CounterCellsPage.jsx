import React from "react";
import "./counter-cells-page.css";
import VideoCamIcon from '@mui/icons-material/Videocam';
import {InputTextFilled} from "../../components/Inputs/InputTextFilled/InputTextFilled.jsx";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import SaveIcon from "@mui/icons-material/Save";
import {ButtonUnFilled} from "../../components/Buttons/ButtonUnFilled/ButtonUnFilled.jsx";
import {OurSkeleton} from "../../components/Skeleton/OurSkeleton/OurSkeleton.jsx";
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';
import {OurCarousel} from "../../components/OurCarousel/OurCarousel.jsx";

export const CounterCellsPage = () => {
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
                        />
                    </div>
                    <div>
                        <ButtonUnFilled
                            variant="contained"
                            id={"button-refresh"}
                            text={"Reiniciar"}
                            startIcon={<ReplayCircleFilledIcon/>}
                            alt={"botão para reiniciar contagem"}
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
                    <OurSkeleton
                        id={"cam-skeleton"}
                        icon={<VideoCamOffIcon/>}
                    />
                </div>
                <div
                    className={"data_table"}
                >
                    <OurSkeleton
                        id={"date-table"}
                    />
                </div>
            </div>
            <div
                className={"counter-cells-page__image-log"}
            >
                <div
                    className={"image-log__carousel"}
                >
                    <OurCarousel
                        deviceType={"desktop"}
                    />
                </div>

            </div>
        </div>
    );
};