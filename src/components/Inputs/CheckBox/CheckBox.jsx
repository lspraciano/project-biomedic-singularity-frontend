import React from 'react';
import "./check-box.css";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import PropTypes from "prop-types";

export const OurCheckBox = (
    {
        label
    }
) => {
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox defaultChecked/>
                }
                label={label}
            />
        </FormGroup>
    );
};


OurCheckBox.propTypes = {
    label: PropTypes.string.isRequired
};