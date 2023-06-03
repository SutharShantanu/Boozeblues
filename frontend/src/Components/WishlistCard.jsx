import { Box, Text, Image, Flex, Stack, useToast } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { getWishlist, removeWishlist } from "../Redux/Wishlist/Action";
import { useDispatch } from "react-redux";
import Styles from "./Styles/ProductCard.module.css";
import { AiFillHeart } from "react-icons/ai";

export default function WishlistCard({
    image,
    title,
    category,
    quantity,
    price,
    id,
    _id,
}) {
    const toast = useToast();
    const dispatch = useDispatch();
    console.log(_id);

    const handleWishlistRemove = async () => {
        try {
            await dispatch(removeWishlist(_id));
            dispatch(getWishlist());
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
                backgroundColor={"#fafafa"}
                maxW="sm"
                border=".5px solid #ccc"
                rounded="xl"
                shadow="md"
                p={2}
                m={2}
                position="relative">
                <button
                    className={Styles.wishlist_button}
                    onClick={handleWishlistRemove}>
                    <AiFillHeart />
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
