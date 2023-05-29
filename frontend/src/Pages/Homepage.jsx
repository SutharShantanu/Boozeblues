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
            <div className={Styles.main_four}>
                <h2>How it works</h2>
                <div className={Styles.four_one}>
                    <div className={Styles.one_one}>
                        <div className={Styles.one_img}>
                            <img
                                src="https://content.gotoliquorstore.com/images/how-it-works/ic_step1.png"
                                alt=""
                            />
                        </div>
                        <h3>Enter your address</h3>
                        <p>
                            Once you tell your location, we'll show you what's
                            available in your local stores.
                        </p>
                    </div>
                    <div className={Styles.one_one}>
                        <div className={Styles.one_img}>
                            <img
                                src="https://content.gotoliquorstore.com/images/how-it-works/ic_step2.png"
                                alt=""
                            />
                        </div>
                        <h3>Shop items you like</h3>
                        <p>
                            Select your favorite items, compare price and shop
                            from multiple stores at once.
                        </p>
                    </div>
                    <div className={Styles.one_one}>
                        <div className={Styles.one_img}>
                            <img
                                src="https://content.gotoliquorstore.com/images/how-it-works/ic_step3.png"
                                alt=""
                            />
                        </div>
                        <h3>Get your items delivered</h3>
                        <p>
                            Store will deliver your order, or you can select to
                            pickup from the store at your convenience.
                        </p>
                    </div>
                </div>
                <button className={Styles.four_two}>Start Shopping</button>
            </div>
            <div className={Styles.main_five}>
                <img
                    src="https://content.gotoliquorstore.com/images/landing/app.png"
                    alt=""
                />
                <div className={Styles.five_right}>
                    <h2>Download the app</h2>
                    <p>
                        Download our free mobile app for a better shopping
                        experience. Get your favorite beer, wine, liquor and
                        more delivered from local stores.
                    </p>
                    <div className={Styles.five_img}>
                        <img
                            src="https://content.gotoliquorstore.com/images/landing/app-store.png"
                            alt=""
                        />
                        <img
                            src="https://content.gotoliquorstore.com/images/landing/play-store.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
