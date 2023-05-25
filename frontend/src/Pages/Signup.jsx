import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    useBreakpointValue,
    Icon,
    Spinner,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    InputRightElement,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButLoading, setIsButLoading] = useState(false);
    const navigate = useNavigate();

    const [show, setShow] = React.useState(false);
    const toast = useToast();
    const handleClick = () => setShow(!show);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            email,
            password,
        };

        if (name !== "" && email !== "" && password !== "") {
            try {
                const res = await axios.post(
                    `http://localhost:4500/users/signup`,
                    payload
                );
                //  .then((res) => console.log(res))
                if (res.data.msg === "User Already Exist") {
                    toast({
                        title: `Email already exist!`,
                        status: `warning`,
                        position: "bottom-right",
                        isClosable: true,
                        variant: "left-accent",
                        duration: 2500,
                    });
                } else {
                    setIsButLoading(true);
                    setTimeout(() => {
                        setIsButLoading(false);
                        toast({
                            title: "Registration Successful",
                            description: "",
                            status: "success",
                            duration: 2500,
                            isClosable: true,
                            position: "top",
                        });
                        navigate("/login");
                    }, 2500);
                }
            } catch (error) {
                toast({
                    title: "Something Went Wrong",
                    status: "error",
                    duration: 2500,
                    isClosable: true,
                    position: "bottom-right",
                });
            }
        } else {
            toast({
                title: `Details Missing!`,
                description: "Kindly fill all the details",
                status: `warning`,
                position: "bottom-right",
                isClosable: true,
                variant: "left-accent",
                duration: 2500,
            });
        }
    };

    return (
        <Box position={"relative"}>
            <Container
                as={SimpleGrid}
                maxW={"7xl"}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: "3xl",
                            sm: "4xl",
                            md: "5xl",
                            lg: "6xl",
                        }}>
                        Embrace the Funky Flavors of the Wine World{" "}
                        <Text
                            as={"span"}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            &
                        </Text>{" "}
                        Unleash Your Wine Quirkiness!
                    </Heading>
                </Stack>
                <Stack
                    bg={"gray.50"}
                    rounded={"xl"}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: "lg" }}>
                    <Stack spacing={4}>
                        <Heading
                            color={"gray.800"}
                            lineHeight={1.1}
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
                            Sign Up for Wine Delights
                            <Text
                                as={"span"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text
                            color={"gray.500"}
                            fontSize={{ base: "sm", sm: "md" }}>
                            We’re looking for amazing engineers just like you!
                            Become a part of our rockstar engineering team and
                            skyrocket your career!
                        </Text>
                    </Stack>
                    <Box as={"form"} mt={10}>
                        <Stack spacing={4}>
                            <FormControl isRequired>
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                    _focusVisible={{
                                        outline: ".5px solid #ccc",
                                    }}
                                    type="text"
                                    placeholder="Full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    variant="outline"
                                    backgroundColor="white"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    _focusVisible={{
                                        outline: ".5px solid #ccc",
                                    }}
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    variant="outline"
                                    backgroundColor="white"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup size="md">
                                    <Input
                                        _focusVisible={{
                                            outline: ".5px solid #ccc",
                                        }}
                                        pr="4.5rem"
                                        type={show ? "text" : "password"}
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        name="password"
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button
                                            backgroundColor="white"
                                            _hover={{
                                                backgroundColor: "white",
                                            }}
                                            h="1.75rem"
                                            size="sm"
                                            onClick={handleClick}>
                                            {show ? (
                                                <VscEyeClosed />
                                            ) : (
                                                <VscEye />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Stack>
                        <Button
                            fontFamily={"heading"}
                            mt={8}
                            marginLeft={"70%"}
                            w={"30%"}
                            padding={"22px"}
                            onClick={handleSubmit}
                            style={{
                                borderRadius: "25px",
                                backgroundColor: "#85004b",
                                color: "white",
                                transition: "all .3s ease-in-out",
                            }}
                            _hover={{
                                boxShadow:
                                    "10px 10px 47px 0px rgba(158,158,158,1)",
                            }}>
                            {!isButLoading ? (
                                <>
                                    Submit <span>&nbsp;</span>{" "}
                                    <IoCheckmarkDoneOutline />
                                </>
                            ) : (
                                <Spinner
                                    thickness="2px"
                                    speed="0.50s"
                                    emptyColor="gray.200"
                                    color="#85004b"
                                    size="md"
                                />
                            )}
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={"absolute"}
                top={-10}
                left={-10}
                style={{ filter: "blur(70px)" }}
            />
        </Box>
    );
}

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};
