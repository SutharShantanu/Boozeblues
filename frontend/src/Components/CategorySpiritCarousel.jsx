import React, { useRef } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Styles/CategoryCarousel.module.css";

const CategorySpiritCarousel = () => {
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
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className={Styles.main}>
            <h1>Popular Spirit</h1>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002500/173f123c-a3e4-4216-8e41-d001f9d8a98e_360_m.jpg"
                        title="Jack Daniel's"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000001495/5443c5a4-c7b5-4fe5-a273-02765e75969f_360_m.jpg"
                        title="Absolut Vodka"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000001934/8a7bd891-e09a-4747-9437-0dd6e661c776_360_m.jpg"
                        title="Remy Martin"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000001899/771763f2-1fbe-45a4-8312-89b7d8d9f635_360_m.jpg"
                        title="Tito's made"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000609/9e7907c9-8c43-4a71-a557-1f2960f36bb8_360_m.jpg"
                        title="Capt Morgan"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002511/42077dad-27e9-41af-8b2e-4a95dc18be9d_360_m.jpg"
                        title="Jim Beam"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002989/d9813de5-b9c6-44d3-9925-2ff5615b51ce_360_m.jpg"
                        title="Jaiger Meister"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002558/ecedc0f4-86b6-4580-9c97-e562351eee72_360_m.jpg"
                        title="SmirKnoff"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002513/26b30b51-984f-4055-bbc0-fb5c6d6a11a1_360_m.jpg"
                        title="Johny Walker"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000843/8c0a36fc-e50c-4c4b-bf1d-de97f0c9b119_360_m.jpg"
                        title="Don Julio"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000001646/b6e77374-59dd-42d5-944a-9af76319e940_360_m.jpg"
                        title="Ketel One"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000002178/307bbd6a-1bb4-4537-a372-6528a8b3e29d_360_m.jpg"
                        title="Crown Royal"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000919/22a0f5fa-24fd-4daa-8669-f55726feecf1_360_m.jpg"
                        title="Patron Anejo"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default CategorySpiritCarousel;
