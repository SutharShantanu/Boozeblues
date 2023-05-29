import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/FullCarousel.css";

const FullCarousel = () => {
    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const PrevArrow = (props) => {
        const { className, style } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={handlePrevClick}>
                Previous
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, style } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={handleNextClick}>
                Next
            </div>
        );
    };

    const settings = {
        dots: true,
        // fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        swipeToSlide: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings} ref={sliderRef}>
            <div>
                <img
                    src="https://storage.gotoliquorstore.com/banner/1187db0f-90e6-420a-b7ec-b2105ecbaa7b.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://storage.gotoliquorstore.com/banner/76665703-82ce-406b-9889-69542be9865f.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://storage.gotoliquorstore.com/banner/1011b9cf-589e-4003-a4ad-8eb62a1bd44f.jpg"
                    alt=""
                />
            </div>
        </Slider>
    );
};

export default FullCarousel;
