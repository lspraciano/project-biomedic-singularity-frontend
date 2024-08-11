import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import "./input-text-filled.css";

export const InputTextFilled = (
    {
        id,
        label,
        size,
        type = "normal",
    }
) => {
    return (
        <TextField
            id={id}
            label={label}
            variant="filled"
            size={size}
            className={"input-text-filled"}
            type={type}
        />
    );
};

InputTextFilled.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium"]).isRequired,
    type: PropTypes.oneOf(["normal", "password"]),
};