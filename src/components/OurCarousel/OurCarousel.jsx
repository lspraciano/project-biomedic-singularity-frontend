import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import "./ourcarousel.css";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024}, items: 4, slidesToSlide: 4
    },
    tablet: {
        breakpoint: {max: 1024, min: 464}, items: 2, slidesToSlide: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0}, items: 1, slidesToSlide: 1
    }
};

export const OurCarousel = (
    {
        deviceType
    }
) => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={deviceType !== "mobile"}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className={"image image1"}></div>
            <div className={"image image2"}></div>
            <div className={"image image3"}></div>
            <div className={"image image4"}></div>
        </Carousel>
    );
};

OurCarousel.propTypes = {
    deviceType: PropTypes.string.isRequired
};
