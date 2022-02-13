import {
  Center,
  Flex,
  NumberDecrementStepper,
  Image,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

interface CartProps {
  index: number;
  handleQuantityChange: (name: string, value: number) => void;
}

const MyCartCard: React.FC<CartProps> = ({ index, handleQuantityChange }) => {
  return (
    <Wrap boxShadow={"lg"} p={"1rem"} mt={"1rem"} rounded="md" key={index}>
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
            stat help textsdfa sdfsdf sadfsdafsdf sdafsd f sadf sad f
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
            <StatHelpText>stat help textdsfsddsfsdfsdf</StatHelpText>
            <StatHelpText>
              stat help textdsfsd f sadf sadfsd fsdf sfs f
            </StatHelpText>
          </Stat>
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export default MyCartCard;
