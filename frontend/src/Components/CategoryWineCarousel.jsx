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
                        image="https://images.gotoliquorstore.com/product/1000003554/98f1441d-cd23-43e9-b291-bcfc4fa42a46_360_m.jpg"
                        title="Almos Melbac"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <CarouselCard
                    image="https://images.gotoliquorstore.com/product/1000003935/de985a2b-1bad-42b0-915a-30a33b0b3fd6_360_m.jpg"
                    title="LA Marca"
                    quantity="6 cans"
                    price="9.49"
                />
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000004074/f9ccd4a4-c096-46c0-9a00-eb327beb52e2_360_m.jpg"
                        title="Stell Rosa"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000004838/5070d425-90a1-439c-b390-d7c3a9203698_360_m.jpg"
                        title="Martini"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003611/e91a773c-a4b1-400e-b254-1ee609a16002_360_m.jpg"
                        title="Barefoot"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003986/20c18002-d274-4e3c-a490-367ad76d60c8_360_m.jpg"
                        title="Meiomi"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000013603/dcee6d9d-f989-4e6f-91a7-d903f2c07344_360_m.jpg"
                        title="Lillet"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003923/8812c4a5-61f6-4a8c-b8f1-4a8ed29e9c1d_360_m.jpg"
                        title="Kim Crawford"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003919/74bcf690-c580-44ff-a394-18c0aead0239_360_m.jpg"
                        title="Josh Cellars"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000004934/56a607ed-8a8c-481c-a6ec-ff6f39c5fb8a_360_m.jpg"
                        title="Boone's Farm"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000004003/01b08b62-beda-4b30-b88f-5d7c33d5573d_360_m.jpg"
                        title="Mogen David"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003780/7c99b18d-49a9-49d0-ad32-8b43a71c9d9c_360_m.jpg"
                        title="Yello Tail"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
                <div>
                    <CarouselCard
                        image="https://images.gotoliquorstore.com/product/1000003701/e472b8dd-3665-4913-aa3b-0369e0e442e6_360_m.jpg"
                        title="Chloe Rose"
                        quantity="6 cans"
                        price="9.49"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default CategoryWineCarousel;
