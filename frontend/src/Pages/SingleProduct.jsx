import { Button, useToast } from "@chakra-ui/react";
import Styles from "./Style/SingleProduct.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiTwitter, CiMail, CiHeart } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineCurrencyDollar, HiOutlineColorSwatch } from "react-icons/hi";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import SingleProductBox from "../Components/SingleProductBox";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../Redux/Cart/Action";

export function SingleProduct() {
    const param = useParams();
    const [data, setData] = useState({});
    const Auth = JSON.parse(localStorage.getItem("isAuth"));
    const [selectedButton, setSelectedButton] = useState(null);

    const [cart, setCart] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    const cartItems = useSelector((state) => state.cart?.items || []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:4500/products/${param.id}`
                );
                console.log(res.data);
                setData(res.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const isProductInWishlist = cartItems.some(
            (item) => item.prodId === data._id
        );
        setCart(isProductInWishlist);
    }, [cartItems, data._id]);

    const handleCartAdd = () => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        try {
            const item = {
                userId: decodedToken.iat,
                prodId: data.id,
                image: data.image,
                title: data.title,
                category: data.category,
                quantity: data.quantity,
                price: data.price,
            };
            dispatch(addCart(item));
            setCart(true);
            toast({
                title: "Product added to wishlist",
                description: "",
                status: "success",
                duration: 600,
                isClosable: true,
                position: "top",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleCartRemove = () => {
        try {
            dispatch(removeCart());
            setCart(false);
            toast({
                title: "Product removed from Cart",
                status: "error",
                duration: 600,
                isClosable: true,
                position: "top",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <>
            <div className={Styles.main}>
                <img src={data.image} alt="" />
                <div className={Styles.details}>
                    <div className={Styles.details_one}>
                        <div className={Styles.one_one}>
                            <h3 className={Styles.one_title}>{data.title}</h3>
                            <h4 className={Styles.one_quantity}>
                                {data.quantity}ml Bottle
                            </h4>
                        </div>
                        <div className={Styles.one_two}>
                            <button
                                className={Styles.wishlist_button}
                                onClick={() => alert("hey")}>
                                {Auth === true ? <CiHeart /> : <AiFillHeart />}
                            </button>
                        </div>
                    </div>
                    <div className={Styles.details_two}>
                        <h5>Size</h5>
                        <div className={Styles.button}>
                            <Button
                                color="black"
                                variant="outline"
                                border={
                                    selectedButton === 1
                                        ? "1px solid #85004b"
                                        : "1px solid black"
                                }
                                fontWeight="400"
                                borderRadius="15px"
                                fontSize="14px"
                                padding="15px"
                                _hover={{
                                    backgroundColor: "#85004b",
                                    color: "white",
                                }}
                                onClick={() => handleButtonClick(1)}>
                                350ml
                            </Button>
                            <Button
                                color="black"
                                variant="outline"
                                border={
                                    selectedButton === 2
                                        ? "1px solid #85004b"
                                        : "1px solid black"
                                }
                                fontWeight="400"
                                fontSize="14px"
                                padding="15px"
                                borderRadius="15px"
                                _hover={{
                                    backgroundColor: "#85004b",
                                    color: "white",
                                }}
                                onClick={() => handleButtonClick(2)}>
                                750ml
                            </Button>
                        </div>
                    </div>

                    <div className={Styles.details_three}>
                        <h5>Discription</h5>
                        <p>
                            This {data.title} Wine is genuinely versatile,
                            pairing well with spicy Asian cuisine and light
                            desserts, fresh fruit, and mild cheeses. Tasty! Get
                            Barefoot and have a great time! Enjoy!
                        </p>
                    </div>
                </div>
                <div className={Styles.to_cart}>
                    <div className={Styles.cart_grid}>
                        <SingleProductBox
                            title={data.category}
                            detail="Muscat/Moscato"
                            image="https://content.gotoliquorstore.com/images/category.png"
                        />
                        <SingleProductBox
                            title="BareFoot"
                            detail="E & J Gallo Winery"
                            image="https://content.gotoliquorstore.com/images/brand.png"
                        />
                        <SingleProductBox
                            title="9% Alcohal"
                            image="https://content.gotoliquorstore.com/images/liquor-measurement.png"
                        />
                        <SingleProductBox
                            title="California"
                            detail="Unites States"
                            image="https://content.gotoliquorstore.com/images/location.png"
                        />
                    </div>
                    <div className={Styles.cart_share}>
                        <h5>Share</h5>
                        <CiTwitter />
                        <SlSocialFacebook />
                        <CiMail />
                    </div>

                    <p className={Styles.cart_info}>
                        * Price, vintage and availability are subject to change
                        based on store’s decisions at time of pick up
                    </p>
                    <Button
                        rightIcon={<AiOutlineShoppingCart />}
                        color="white"
                        borderRadius="15px"
                        backgroundColor="#85004b"
                        border="1px solid white"
                        width="90%"
                        padding="25px 5px"
                        variant="solid"
                        onClick={
                            cart === false ? handleCartAdd : handleCartRemove
                        }
                        _hover={{ backgroundColor: "#69023c" }}>
                        Add to Cart
                    </Button>
                    <br />
                    <p className={Styles.cart_divider}>OR</p>
                    <Button
                        rightIcon={<HiOutlineCurrencyDollar />}
                        color="white"
                        borderRadius="15px"
                        width="90%"
                        backgroundColor="#85004b"
                        border="1px solid white"
                        variant="solid"
                        _hover={{ backgroundColor: "#69023c" }}>
                        Buy Now
                    </Button>
                </div>
            </div>

            <div className={Styles.part}>
                <div className={Styles.part_one}>
                    <HiOutlineColorSwatch className={Styles.related_icon} />
                    <h2>Related Products</h2>
                </div>
                <div className={Styles.part_two}>
                    <img
                        src="https://images.gotoliquorstore.com/product/1000003986/20c18002-d274-4e3c-a490-367ad76d60c8_360_m.jpg"
                        alt=""
                    />
                    <div>
                        <h4>Meiomi Pinot Noir</h4>
                        <p>Red Wine | Pinot Noir</p>
                        <p>750ml Bottle</p>
                        <h3>$21.99</h3>
                    </div>
                </div>
                <div className={Styles.part_three}>
                    <img
                        src="https://images.gotoliquorstore.com/product/1000003860/2c16aab6-308d-4f51-89da-4a9b6280a7b1_360_m.jpg"
                        alt=""
                    />
                    <div>
                        <h4>Ecco Domani Pinot </h4>
                        <p>White Wine </p>
                        <p>750ml Bottle</p>
                        <h3>$12.99</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
