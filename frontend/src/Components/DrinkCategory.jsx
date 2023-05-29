import React from "react";
import Styles from "./Styles/DrinkCategory.module.css";

const DrinkCategory = ({ image, text }) => {
    return (
        <div
            className={Styles.main}
            style={{ backgroundImage: `url(${image})` }}>
            <p className={Styles.main_text}>{text}</p>
        </div>
    );
};

export default DrinkCategory;
