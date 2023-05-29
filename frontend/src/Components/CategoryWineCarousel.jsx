import React, { useRef } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Styles/CategoryCarousel.module.css";

const CategoryWineCarousel = () => {
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
            <h1>Popular Wines</h1>
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <CarouselCard
                    image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                    title="Stella Artois"
                    quantity="6 cans"
                    price="9.49"
                />
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000466/51330e04-e917-4f58-97b2-0462f3a369dd_360_m.jpg"
                        title="Stella Artois"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default CategoryWineCarousel;
