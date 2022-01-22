import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  // Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEye = chakra(FaEye);
const CFaEyeSlash = chakra(FaEyeSlash);
const CFcGoogle = chakra(FcGoogle);

import GoogleSignUp from "../../auth/Google";
import "./Login.css";
import CustomInput from "../../common/atom/CustomInput";
import CustomButton from "../../common/atom/CustomButton";
import { config } from "../../config/config";
import CustomLink from "../../common/atom/CustomLink";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="90vh"
      justifyContent="center"
      alignItems="center"
      className="login__background-color"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar className="primary__background-color" />
        <Heading color="white">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              pt="3rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius={10}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <CustomInput
                    className="custom__input-space"
                    type="email"
                    placeholder="Email address"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <CustomInput
                    className="custom__input-space"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement h={"full"}>
                    <CustomButton size="sm" onClick={handleShowClick}>
                      {showPassword ? (
                        <CFaEyeSlash className="eye-color" />
                      ) : (
                        <CFaEye className="eye-color" />
                      )}
                    </CustomButton>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <CustomLink color="#718fb5" to="/forgotPassword">
                    forgot password?
                  </CustomLink>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                color="white"
                width="full"
                className="primary__background-color font-size__800"
              >
                Login
              </Button>
              <Box className="login__actions">
                <Box mt={1}>
                  New to us?{" "}
                  <CustomLink color="var(--primary-color)" to="/registration">
                    Sign Up
                  </CustomLink>
                </Box>
                <Box display="flex" flex={1}></Box>
                <Box display="inline-flex">
                  <Text mt={3} pr={5}>
                    SignIn with{" "}
                  </Text>
                  <GoogleSignUp />
                </Box>
              </Box>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
