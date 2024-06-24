import {createContext, useState} from 'react';
import PropTypes from "prop-types";

export const CounterCellsContext = createContext(
    {}
);

export const CounterCellsProvider = (
    {
        children
    }
) => {
    const [isWebcamOpen, setIsWebcamOpen] = useState(false);
    const turnOnWebcam = () => {
        setIsWebcamOpen(!isWebcamOpen)
    };

    return (
        <CounterCellsContext.Provider
            value={
                {
                    isWebcamOpen,
                    turnOnWebcam
                }
            }
        >
            {
                children
            }
        </CounterCellsContext.Provider>
    );
};

CounterCellsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};