import PropTypes from "prop-types";
import "./button-filled.css";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';

export const ButtonFilled = (
    {
        id,
        text,
        alt,
        icon,
        startIcon
    }
) => {
    const navigate = useNavigate();
    return (
        <Button
            variant="contained"
            id={id}
            className={"button-filled"}
            startIcon={startIcon ? startIcon : null}
            onClick={
                () => {
                    navigate("/counter-cells")
                }
            }
        >
            {
                icon ?
                    <img
                        src={icon}
                        alt={alt}
                    /> : <>
                    </>
            }
            {text}
        </Button>
    );
};

ButtonFilled.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    icon: PropTypes.string,
    startIcon: PropTypes.object
};