import { ReactNode } from "react";
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link as ChakraLink,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaApple,
    FaGooglePlay,
} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

const CustomLink = ({ children, ...rest }) => (
    <ChakraLink
        fontSize="md"
        fontWeight={350}
        {...rest}
        _hover={{ borderBottom: "none", color: "#85004b" }}>
        {children}
    </ChakraLink>
);

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            // bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}

            // rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function LargeWithAppCustomLinksAndSocial() {
    return (
        <Box
            bg={useColorModeValue("#ececec", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}>
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={"flex-start"}>
                        <ListHeader>ABOUT</ListHeader>
                        <CustomLink href={"#"}>About Us</CustomLink>
                        <CustomLink href={"#"}>Stores</CustomLink>
                        <CustomLink href={"#"}>Wine Stores</CustomLink>
                        <CustomLink href={"#"}>Beer stores</CustomLink>
                        <CustomLink href={"#"}>Alcohol Delivery</CustomLink>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>HELP</ListHeader>
                        <CustomLink href={"#"}>In Store Pickup</CustomLink>
                        <CustomLink href={"#"}>FAQ</CustomLink>
                        <CustomLink href={"#"}>Contact Us</CustomLink>
                        <CustomLink href={"#"}>Request Product</CustomLink>
                        <CustomLink href={"#"}>Return & Refund</CustomLink>
                        <CustomLink href={"#"}>Join as Retailer</CustomLink>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>MY ACCOUNT</ListHeader>
                        <CustomLink href={"#"}>Sign In</CustomLink>
                        <CustomLink href={"#"}>Sign Up</CustomLink>
                    </Stack>

                    <Stack align={"flex-start"}>
                        <ListHeader>FOLLOW US</ListHeader>
                        <Stack direction={"row"} spacing={4}>
                            <SlSocialFacebook fontSize={"25px"} href="#" />

                            <CiTwitter fontSize={"25px"} />

                            <FaInstagram fontSize={"25px"} />
                        </Stack>
                        <ListHeader>DOWNLOAD THE APP</ListHeader>
                        <Stack direction={"row"} spacing={4}>
                            <FaApple fontSize={"27px"} />

                            <FaGooglePlay fontSize={"23px"} />
                        </Stack>
                        <ListHeader>PAYMENT OPTIONS</ListHeader>

                        {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                // borderTopWidth={1}
                // borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}>
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    // direction={{ base: "column", md: "row" }}
                    spacing={3}
                    justify={{ md: "space-between" }}
                    align={{ md: "center" }}>
                    <Text>Terms and Conditions | Privacy Policy</Text>
                    <Text>© 2022 Goto Concept LLC All rights reserved.</Text>
                    <Text fontSize={"12px"}>
                        <span style={{ fontWeight: "bold" }}>
                            California Proposition 65 WARNING:
                        </span>
                        Drinking distilled spirits,beer,coolers,wine and other
                        alcoholic beverages may increase cancer risk,and, during
                        pregnancy can cause birth defects.For more information
                        go to
                    </Text>
                    <a
                        href={
                            "https://www.p65warnings.ca.gov/products/alcoholic-beverages"
                        }
                        style={{
                            color: "#85004b",
                            marginTop: "0px",
                            fontSize: "13px",
                        }}>
                        www.P65Warnings.ca.gov/alcohol
                    </a>
                </Container>
            </Box>
        </Box>
    );
}
