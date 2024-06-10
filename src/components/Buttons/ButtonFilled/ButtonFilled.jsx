import React from "react";
import PropTypes from "prop-types";
import "./button-filled.css";
import Button from "@mui/material/Button";

export const ButtonFilled = (
    {
        id,
        text,
        alt,
        icon,
    }
) => {
    return (
        <Button
            variant="contained"
            id={id}
            className={"button-filled"}
        >
            {
                icon ?
                    <img
                        src={icon}
                        alt={alt}
                    />
                    :
                    <>
                    </>
            }
            {
                text
            }
        </Button>
    );
};

ButtonFilled.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string
};