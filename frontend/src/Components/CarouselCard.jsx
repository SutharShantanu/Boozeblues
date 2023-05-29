import { Box, Text, Image, Flex, Stack } from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

export default function CarouselCard({
    image,
    title,
    category,
    quantity,
    price,
    id,
}) {
    return (
        <ReactLink to={`/products/${id}`}>
            <Box
                backgroundColor={"#fafafa"}
                maxW="sm"
                border=".5px solid #ccc"
                rounded="xl"
                shadow="md"
                p={2}
                m={2}>
                <Image
                    src={image}
                    width={"70%"}
                    display={"block"}
                    margin={"auto"}
                    objectFit={"cover"}
                    roundedTop="xl"
                />

                <Box backgroundColor={"white"} p="2" textAlign={"left"}>
                    <Text
                        fontSize={"lg"}
                        fontFamily={"body"}
                        fontWeight={500}
                        noOfLines={2} // Limits the title to two lines
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxHeight: "3.6em", // Adjust the height based on your font size and line height
                        }}>
                        {title}
                    </Text>
                    <Stack mt={4}>
                        <Text fontWeight={400} fontSize={"sm"}>
                            {quantity}
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
        </ReactLink>
    );
}
