import React, { useEffect, useState } from "react";
import "../login/Login";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import CustomInput from "../../common/atom/CustomInput";
import CustomButton from "../../common/atom/CustomButton";
import CustomFormControl from "../../common/molecules/CustomFormControl";
import CustomLink from "../../common/atom/CustomLink";
import CustomSelect from "../../common/atom/CustomSelect";
import { selectRegis } from "../../store/regis-slice"
import { useDispatch, useSelector } from "react-redux";
import { regisAction } from "../../store/regis-slice";

const Registration: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showGST, setShowGST] = useState(false);
    const isGstReq = useSelector(selectRegis);
    console.log('is gst', isGstReq);

    const dispatch = useDispatch();
    let selected: string;
    const hangleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value } = event.target;
        selected = value;
        dispatch(regisAction.isPersonal(selected))
        // if (selected === 'personal') {
        //     setShowGST(false);
        // } else if (selected === 'industrial') {
        //     setShowGST(true);
        // }
    };
    // useEffect(() => {
    //     if(selected === 'industrial') {
    //         setShowGST(true);
    //     }
    // },[selected])

    return (
        <Flex
            minH={"90vh"}
            align={"center"}
            justify={"center"}
            className="login__background-color"
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text> */}
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <HStack>
                            <CustomFormControl
                                id="firstName"
                                type="text"
                                placeholder="first name"
                            >
                                First Name
                            </CustomFormControl>
                            <CustomFormControl
                                id="lastName"
                                type="text"
                                placeholder="last name"
                            >
                                Last Name
                            </CustomFormControl>
                        </HStack>
                        <Box mb={10}>
                            <FormLabel>User Type</FormLabel>
                            <CustomSelect
                                onChange={hangleSelect}
                                variant="outline"
                                placeholder="Please Select"
                            >
                                <option value="personal">Personal</option>
                                <option value="industrial">Industrial</option>
                            </CustomSelect>
                            {isGstReq.showGST && <CustomFormControl isRequired id="gstNumber" type="text" placeholder="GST number">GST Number</CustomFormControl>}
                        </Box>
                        <CustomFormControl
                            isRequired
                            id="phone"
                            type="phone"
                            placeholder="phone number"
                        >
                            Phone Number
                        </CustomFormControl>
                        <CustomFormControl
                            isRequired
                            id="email"
                            type="email"
                            placeholder="Email Address"
                        >
                            Email address
                        </CustomFormControl>
                        <Box>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <CustomInput
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                    />
                                    <InputRightElement h={"full"}>
                                        <CustomButton
                                            size="sm"
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }
                                        >
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </CustomButton>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </Box>
                        <Stack spacing={10} pt={2}>
                            <CustomButton
                                size="lg"
                                bg={"var(--primary-color)"}
                                color={"white"}
                                _hover={{
                                    bg: "var(--primary-color-800)",
                                }}
                            >
                                Sign up
                            </CustomButton>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user?
                                <CustomLink color={"var(--primary-color)"} to="/login">
                                    Login
                                </CustomLink>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Registration;
