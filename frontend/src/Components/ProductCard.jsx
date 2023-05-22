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
                            textAlign={"center"}>
                            {title}
                        </Text>
                        <Stack align={"center"}>
                            <Text fontWeight={400} fontSize={"sm"}>
                                {quantity}
                            </Text>
                            <Text fontWeight={800} fontSize={"xl"}>
                                ${price}
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </Flex>
        </ReactLink>
    );
}
