import React from "react";
import PropTypes from "prop-types";
import "./button-unfilled.css";
import Button from "@mui/material/Button";

export const ButtonUnFilled = ({
                                   id, text, alt, icon, startIcon, functionOnClick, disabled = false
                               }) => {
    const classNameToDisable = !disabled ? "" : "button-unfilled--disabled";

    return (<Button
        variant="contained"
        id={id}
        className={"button-unfilled " + classNameToDisable}
        startIcon={startIcon ? startIcon : null}
        onClick={functionOnClick}
        disabled={disabled}
    >
        {icon ? <img
            src={icon}
            alt={alt}
        /> : <>
        </>}
        {text}
    </Button>);
};

ButtonUnFilled.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string,
    startIcon: PropTypes.object,
    functionOnClick: PropTypes.func,
    disabled: PropTypes.bool,
};