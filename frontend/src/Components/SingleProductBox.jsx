import React from "react";
import Styles from "./Styles/SingleProductBox.module.css";
const SingleProductBox = ({ title, detail, image }) => {
    return (
        <div className={Styles.main}>
            <img src={image} alt="" />

            <div className={Styles.main_details}>
                <h4>{title}</h4>
                <h5>{detail}</h5>
            </div>
        </div>
    );
};

export default SingleProductBox;
