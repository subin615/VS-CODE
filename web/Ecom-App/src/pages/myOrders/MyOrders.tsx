import {
  Center,
  Container,
  Wrap,
  WrapItem,
  Image,
  Stat,
  HStack,
  StatLabel,
  StatHelpText,
} from "@chakra-ui/react";
import React from "react";

const MyOrders: React.FC = () => {
  return (
    <Container maxW={"container.xl"}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          return (
            <Wrap boxShadow={"lg"} p={"1rem"} mt={"1rem"} rounded="md">
              <WrapItem flex={1}>
                <Center>
                  <HStack display={"flex"} flexWrap={"wrap"}>
                    <Image
                      boxSize={100}
                      height={"auto"}
                      src="https://bit.ly/dan-abramov"
                      alt="product"
                    />
                    <Stat>
                      <StatLabel>stat label</StatLabel>
                      <StatHelpText>stat help text</StatHelpText>
                      <StatHelpText>
                        stat help textsdfa sdfsdf sadfsdafsdf sdafsd f sadf sad
                        f
                      </StatHelpText>
                    </Stat>
                  </HStack>
                </Center>
              </WrapItem>
              <WrapItem flex={1} display={"flex"} alignItems={"center"}>
                <Center>Rs. 1000</Center>
              </WrapItem>
              <WrapItem flex={1}>
                <Center>
                  <Stat>
                    <StatLabel color={i % 2 ? "green" : "red"}>
                      {i % 2 ? "Delivered" : "Cancelled"}
                    </StatLabel>
                    <StatHelpText>stat help textdsfsddsfsdfsdf</StatHelpText>
                    <StatHelpText>
                      stat help textdsfsd f sadf sadfsd fsdf sfs f
                    </StatHelpText>
                  </Stat>
                </Center>
              </WrapItem>
            </Wrap>
          );
        })}
    </Container>
  );
};

export default MyOrders;
