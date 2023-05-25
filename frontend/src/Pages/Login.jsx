import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Group, Divider, Anchor } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import {
    Box,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Spinner,
    Button,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

import axios from "axios";
import { loginUser } from "../Redux/UserReducer/Action";
import { useDispatch } from "react-redux";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButLoading, setIsButLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const toast = useToast();
    const handleClick = () => setShow(!show);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(password);
        const payload = { email, password };
        if (email !== "" && password !== "") {
            try {
                const res = await axios.post(
                    `http://localhost:4500/users/login`,
                    payload
                );
                // console.log(res.data);

                if (res.data.token) {
                    const token = res.data.token;
                    localStorage.setItem("token", token);
                    dispatch(loginUser(token));
                    setIsButLoading(true);
                    setTimeout(() => {
                        setIsButLoading(false);
                        toast({
                            title: "Login Successful",
                            description: "",
                            status: "success",
                            duration: 2500,
                            isClosable: true,
                            position: "top",
                        });
                        navigate("/");
                    }, 2500);
                } else {
                    toast({
                        title: "Wrong Credentials",
                        status: "error",
                        duration: 2500,
                        isClosable: true,
                        position: "bottom-right",
                    });
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
                title: "Details Missing!",
                description: "Kindly fill all the details",
                status: "warning",
                position: "bottom-right",
                isClosable: true,
                variant: "left-accent",
                duration: 2500,
            });
        }
    };

    return (
        <Box
            borderRadius={24}
            p={8}
            style={{
                width: "35%",
                margin: "40px auto",
                border: ".5px solid #ccc",
            }}>
            <Text style={{ fontSize: "25px", fontWeight: "700" }}>
                Welcome to Boozeblues , login with
            </Text>
            <Box
                style={{
                    border: ".5px solid #ccc",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "25px",
                    width: "23%",
                    fontSize: "14px",
                    fontWeight: "600",
                    margin: "25px auto",
                }}
                _hover={{
                    cursor: "pointer",
                    backgroundColor: "#f8f9fa",
                    boxShadow: "1px 1px 100px 0px rgba(158,158,158,1)",
                }}>
                <FcGoogle
                    style={{
                        fontSize: "17px",
                    }}
                />
                Google
            </Box>

            <Divider
                label="Or continue with email"
                labelPosition="center"
                my="lg"
            />

            <Stack>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        _focusVisible={{
                            outline: ".5px solid #ccc",
                        }}
                        type="email"
                        placeholder="example@mail.dev"
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
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                                {show ? <VscEyeClosed /> : <VscEye />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </Stack>

            <Group position="apart" mt="xl">
                <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    size="xs">
                    Don't have an account? Register
                </Anchor>
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
                        boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
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
            </Group>
        </Box>
    );
}
