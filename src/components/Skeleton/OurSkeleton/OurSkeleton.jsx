import React from "react";
import "./our-skeleton.css";
import {Skeleton} from "@mui/material";
import PropTypes from "prop-types";

export const OurSkeleton = (
    {
        id,
        icon,
    }
) => {
    return (
        <Skeleton
            id={id}
            variant="rectangular"
            className={"our-skeleton"}
        >
            {
                icon ?
                    icon
                    :
                    null
            }
        </Skeleton>
    );
};

OurSkeleton.propTypes = {
    id: PropTypes.string.isRequired,
    icon: PropTypes.object
};