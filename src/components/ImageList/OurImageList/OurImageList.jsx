import React from 'react';
import './our-image-list.css';


export const OurImageList = (
    {
        itemData
    }
) => {
    return (
        <div
            className={"our-image-list"}
        >
            {
                // eslint-disable-next-line react/prop-types
                [...itemData].map(
                    (item, index) => {
                        return <img
                            className={"our-image-list__image"}
                            key={index}
                            src={item}
                            alt={"imagem de leucócitos recém contadas"}
                            loading={"lazy"}
                        />
                    }
                )
            }

        </div>
    );
};