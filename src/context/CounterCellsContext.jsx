import React, {createContext, useEffect, useRef, useState} from 'react';
import _ from 'lodash';
import PropTypes from "prop-types";
import {plotImageOnCanvas} from "../pages/CounterCellsPage/utils/plotImageOnCanvas.js";
import {mergeOutputDict} from "../pages/CounterCellsPage/utils/mergeYoloOutput.js";

export const CounterCellsContext = createContext({});

export const CounterCellsProvider = ({children}) => {
    const webSocketUrl = 'ws://localhost:8000/v1/white-blood-cells/track/ws';
    const [isWebsocketOpen, setIsWebsocketOpen] = useState(false);
    const [showWebcam, setShowWebcam] = useState(false);
    const [resetPersist, setResetPersist] = useState(false);
    const [outputCellCount, setOutputCellCount] = useState({});

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const websocketRef = useRef(null);
    const resetPersistRef = useRef(resetPersist);
    const intervalIdRef = useRef(null);
    const outputCellCountRef = useRef({});

    useEffect(() => {
        if (isWebsocketOpen) {
            startStreaming();
        } else {
            stopStreaming();
        }

        return () => {
            stopStreaming();
        };
    }, [isWebsocketOpen]);

    useEffect(() => {
        resetPersistRef.current = resetPersist;
    }, [resetPersist]);

    const startStreaming = () => {
        websocketRef.current = new WebSocket(webSocketUrl);

        websocketRef.current.onopen = () => {
            console.log('Conexão WebSocket estabelecida');
        };

        websocketRef.current.onmessage = async (event) => {
            let newOutput = {};
            const yolo_json_data = JSON.parse(event.data);
            const imageSrc = webcamRef.current.getScreenshot({width: 640, height: 640});

            if (imageSrc && imageSrc.startsWith("data:image/jpeg;base64,")) {
                newOutput = await plotImageOnCanvas(canvasRef, imageSrc, yolo_json_data, outputCellCountRef.current);

                if (newOutput) {
                    const currentCellCount = _.cloneDeep(outputCellCountRef.current);
                    const updatedCurrentCellCount = mergeOutputDict(currentCellCount, newOutput);

                    if (!_.isEqual(outputCellCountRef.current, updatedCurrentCellCount)) {
                        outputCellCountRef.current = updatedCurrentCellCount;
                        setOutputCellCount(updatedCurrentCellCount);
                    }
                }
            }
        };

        websocketRef.current.onerror = (error) => {
            console.error('Erro no WebSocket:', error);
        };

        websocketRef.current.onclose = () => {
            console.log('Conexão WebSocket fechada');
        };

        intervalIdRef.current = setInterval(() => {
            const resetModelPersist = resetPersistRef.current;
            const imageSrc = webcamRef.current.getScreenshot({width: 640, height: 640});

            if (imageSrc && imageSrc.startsWith("data:image/jpeg;base64,")) {
                websocketRef.current.send(JSON.stringify({image_data: imageSrc, reset_persist: resetModelPersist}));

                if (resetModelPersist) {
                    setResetPersist(false);
                }
            }
        }, 18);
    };

    const stopStreaming = () => {
        if (websocketRef.current) {
            websocketRef.current.close();
            outputCellCountRef.current = {};
            setOutputCellCount({});
        }
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }
    };

    const toggleWebsocketConnection = () => {
        setIsWebsocketOpen(prevState => !prevState);
    };

    const toggleShowWebcam = () => {
        setShowWebcam(prevState => !prevState);
    };

    const resetModelPersist = () => {
        setResetPersist(true);
        outputCellCountRef.current = {};
        setOutputCellCount({});
    };

    return (<CounterCellsContext.Provider
        value={{
            isWebsocketOpen,
            toggleWebsocketConnection,
            resetPersist,
            outputCellCount,
            showWebcam,
            toggleShowWebcam,
            webcamRef,
            canvasRef,
            resetModelPersist
        }}
    >
        {children}
    </CounterCellsContext.Provider>);
};

CounterCellsProvider.propTypes = {
    children: PropTypes.node.isRequired
};