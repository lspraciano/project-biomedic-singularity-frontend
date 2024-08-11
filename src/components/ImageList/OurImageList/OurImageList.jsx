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