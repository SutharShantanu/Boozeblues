import { Box, Text, Image, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";

export default function ProductCard({
    image,
    title,
    category,
    quantity,
    price,
    id,
}) {
    const [wishlist, setwishlist] = useState(true);

    return (
        <ReactLink to={`/products/${id}`}>
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
                    {wishlist ? (
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/2767/2767018.png"
                            size="10px"
                            position="absolute"
                            top={2}
                            right={2}
                            w="10%"
                            onClick={() => setwishlist(!wishlist)}
                        />
                    ) : (
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/2767/2767003.png"
                            size="10px"
                            position="absolute"
                            top={2}
                            right={2}
                            w="10%"
                            onClick={() => setwishlist(!wishlist)}
                        />
                    )}

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
                </Box>
            </Flex>
        </ReactLink>
    );
}
