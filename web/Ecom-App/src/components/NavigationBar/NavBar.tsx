import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from "../../common/organisms/DesktopNav";
import MobileNav from "../../common/organisms/MobileNav";

const NavBar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const handleRouting = (pathName: string) => {
    navigate(`/${pathName}`);
  };
  return (
    <Box position={"sticky"} top={0} zIndex={10}>
      <Flex
        bg={"var(--primary-color)"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "left", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            onClick={() => handleRouting("home")}
            cursor={"pointer"}
          >
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          display={{ base: "none", md: "flex" }}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"var(--primary-color)"}
            _hover={{
              bg: "var(--primary-color)",
            }}
            onClick={() => handleRouting("login")}
          >
            Sign In
          </Button>
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"var(--primary-color)"}
            _hover={{
              bg: "var(--primary-color)",
            }}
            onClick={() => handleRouting("registration")}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default NavBar;
