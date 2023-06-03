import React, { useRef } from "react";
import Slider from "react-slick";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Styles/CategoryCarousel.module.css";

const CategoryBeerCarousel = () => {
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
            <h1>Popular Beers</h1>
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
                    image="https://images.gotoliquorstore.com/product/1000000182/5b2326d7-c8ba-477d-a7fb-7df4e12dde39_360_m.jpg"
                    title="Budweiser"
                    quantity="6 cans"
                    price="9.49"
                />
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000279/0dcfb3ac-cd82-481f-9a55-2def073e942c_360_m.jpg"
                        title="Michelob Ultra"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000222/e21153cf-bb96-4142-99b6-bb255458bce7_360_m.jpg"
                        title="Heineken"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003049/d3226a63-f7f4-4e1b-b386-dbbd3c77155e_360_m.jpg"
                        title="Bud Light"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000340/f49df336-ffd3-47cf-be93-08df3393e412_360_m.jpg"
                        title="Modelo"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000323/c3da2852-9554-437e-b736-199844cb0273_360_m.jpg"
                        title="Miller Lite"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000120/acd15e8e-d1a4-4c0f-9812-9168e3e50d57_360_m.jpg"
                        title="Corona Extra"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000093/a6aea786-4ced-4c37-848f-6172f04c306c_360_m.jpg"
                        title="Busch"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000315/ebf2c676-3667-4885-baee-6774cc0be145_360_m.jpg"
                        title="Miller HighLife"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000116/fbe28ba8-dbe5-435a-9fd7-ab1673f1562b_360_m.jpg"
                        title="Coors Banquet"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000017/c907d1d0-a09e-4cf8-b75f-2428835d5a9b_360_m.jpg"
                        title="Beck's"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000000216/3446ad51-3fd4-4b6c-b987-46e7ed65a45d_360_m.jpg"
                        title="Guiness"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default CategoryBeerCarousel;
