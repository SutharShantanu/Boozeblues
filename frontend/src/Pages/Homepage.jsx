import React from "react";
import Styles from "./Style/Homepage.module.css";
import FullCarousel from "../Components/FullCarousel";
import DrinkCategory from "../Components/DrinkCategory";
import CategoryBeerCarousel from "../Components/CategoryBeerCarousel";
import CategoryWineCarousel from "../Components/CategoryWineCarousel";
import CategorySpiritCarousel from "../Components/CategorySpiritCarousel";

const Homepage = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.main_one}>
                <FullCarousel />
            </div>
            <div className={Styles.main_two}>
                <DrinkCategory
                    image="https://content.gotoliquorstore.com/images/home-categ/Beer.jpg"
                    text="Beer"
                />
                <DrinkCategory
                    image="https://content.gotoliquorstore.com/images/home-categ/Wine.jpg"
                    text="Wine"
                />
                <DrinkCategory
                    image="https://content.gotoliquorstore.com/images/home-categ/Spirits.jpg"
                    text="Spritis"
                />
                <DrinkCategory
                    image="https://content.gotoliquorstore.com/images/home-categ/Extras.jpg"
                    text="Extras"
                />
            </div>
            <div className={Styles.main_three}>
                <CategoryBeerCarousel />
                <CategoryWineCarousel />
                <CategorySpiritCarousel />
            </div>
        </div>
    );
};

export default Homepage;
