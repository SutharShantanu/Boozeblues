import { Box, Text, Image, Flex, Stack, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { addWishlist, removeWishlist } from "../Redux/Wishlist/Action";
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import Styles from "./Styles/ProductCard.module.css";
import { AiFillHeart } from "react-icons/ai";
import jwtDecode from "jwt-decode";

export default function ProductCard({
    image,
    title,
    category,
    quantity,
    price,
    id,
    _id,
}) {
    const [wishlist, setwishlist] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    const wishlistItems = useSelector((state) => state.wishlist?.items || []);

    useEffect(() => {
        const isProductInWishlist = wishlistItems.some(
            (item) => item.prodId === _id
        );
        setwishlist(isProductInWishlist);
    }, [wishlistItems, _id]);

    const handleWishlistAdd = () => {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        try {
            const item = {
                userId: decodedToken.iat,
                prodId: id,
                image: image,
                title: title,
                category: category,
                quantity: quantity,
                price: price,
            };
            dispatch(addWishlist(item));
            setwishlist(true);
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

    const handleWishlistRemove = () => {
        try {
            dispatch(removeWishlist());
            setwishlist(false);
            toast({
                title: "Product removed from wishlist",
                status: "error",
                duration: 600,
                isClosable: true,
                position: "top",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Flex justifyContent="center">
            <Box
                backgroundColor={"white"}
                maxW="sm"
                border=".5px solid #ccc"
                rounded="xl"
                shadow="md"
                p={2}
                m={2}
                position="relative">
                <button
                    className={Styles.wishlist_button}
                    onClick={
                        wishlist === false
                            ? handleWishlistAdd
                            : handleWishlistRemove
                    }>
                    {wishlist === true ? <AiFillHeart /> : <CiHeart />}
                </button>
                <ReactLink to={`/products/${id}`}>
                    <Image
                        src={image}
                        width={"50%"}
                        display={"block"}
                        margin={"auto"}
                        objectFit={"cover"}
                        roundedTop="xl"
                    />
                    <Box backgroundColor={"white"} p="2" align={"center"}>
                        <Text
                            color={"gray.500"}
                            fontSize={"sm"}
                            textTransform={"uppercase"}>
                            {category}
                        </Text>
                        <Text
                            fontSize={"lg"}
                            fontFamily={"body"}
                            fontWeight={500}
                            p={4}
                            noOfLines={2} // Limits the title to two lines
                            style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxHeight: "3.6em", // Adjust the height based on your font size and line height
                            }}
                            textAlign={"center"}>
                            {title}
                        </Text>
                        <Stack align={"center"} mt={4}>
                            <Text fontWeight={400} fontSize={"sm"}>
                                {quantity}ml
                            </Text>
                            <Text
                                fontWeight={800}
                                fontSize={"xl"}
                                color={"#85004b"}>
                                ${price}
                            </Text>
                        </Stack>
                    </Box>
                </ReactLink>
            </Box>
        </Flex>
    );
}
