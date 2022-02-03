import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Stat,
  StatHelpText,
  Image,
  StatLabel,
  StatNumber,
  Button,
  useBreakpointValue,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const MyCarts: React.FC = () => {
  const [value, setValue] = useState<{ T: number } | {}>({});
  // const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
  //   useNumberInput({
  //     step: 1,
  //     defaultValue: 1,
  //     min: 1,
  //     max: 100,
  //   });

  // const inc = getIncrementButtonProps();
  // const dec = getDecrementButtonProps();
  // const input = getInputProps({ readOnly: true });
  const gridValue = useBreakpointValue({
    base: "repeat(1,1fr)",
    md: "repeat(3,1fr)",
  });

  const handleQuantityChange = (name: string, value: number) => {
    console.log("event", value, name);
    setValue(value as number);
  };

  return (
    <Grid templateColumns={gridValue} m={"1rem"}>
      <GridItem colSpan={2}>
        <Box m={"2rem"}>
          <Box
            boxShadow={"md"}
            h={"50px"}
            position={"sticky"}
            top={"60px"}
            bg={"white"}
            zIndex={3}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            My Carts(5)
          </Box>
          {Array(5)
            .fill(1)
            .map((_, index) => {
              return (
                <Wrap
                  boxShadow={"lg"}
                  p={"1rem"}
                  mt={"1rem"}
                  rounded="md"
                  key={index}
                >
                  <WrapItem flex={1}>
                    <Center>
                      <VStack display={"flex"} flexWrap={"wrap"}>
                        <Image
                          boxSize={100}
                          height={"auto"}
                          src="https://bit.ly/dan-abramov"
                          alt="product"
                        />
                        {/* <HStack maxW="320px">
                          <Button {...inc}>+</Button>
                          <Input
                            {...input}
                            value={value}
                            w={45}
                          />
                          <Button {...dec}>-</Button>
                        </HStack> */}
                        <NumberInput
                          size="sm"
                          name={`numberInput${index}`}
                          maxW={20}
                          defaultValue={1}
                          min={1}
                          max={100}
                          onChange={handleQuantityChange}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </VStack>
                    </Center>
                  </WrapItem>
                  <WrapItem flex={2}>
                    <Stat>
                      <StatLabel>stat label</StatLabel>
                      <StatHelpText>stat help text</StatHelpText>
                      <StatHelpText>
                        stat help textsdfa sdfsdf sadfsdafsdf sdafsd f sadf sad
                        f
                      </StatHelpText>
                      <StatNumber>Rs. 1000</StatNumber>
                      <Flex>
                        <StatLabel fontSize={"1rem"}>SAVE FOR LATER</StatLabel>
                        <StatLabel fontSize={"1rem"} ml={"1rem"}>
                          REMOVE
                        </StatLabel>
                      </Flex>
                    </Stat>
                  </WrapItem>
                  <WrapItem flex={1}>
                    <Center>
                      <Stat>
                        <StatHelpText>
                          stat help textdsfsddsfsdfsdf
                        </StatHelpText>
                        <StatHelpText>
                          stat help textdsfsd f sadf sadfsd fsdf sfs f
                        </StatHelpText>
                      </Stat>
                    </Center>
                  </WrapItem>
                </Wrap>
              );
            })}
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box
          boxShadow={"lg"}
          p={"1rem"}
          w={"100%"}
          h={400}
          mt={"2rem"}
          position={"sticky"}
          top={"60px"}
        >
          price list
          <Button
            bg="var(--primary-color)"
            size="lg"
            color={"white"}
            position={"absolute"}
            bottom={"10px"}
            right={"10px"}
            zIndex={2}
          >
            Place Order
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default MyCarts;
