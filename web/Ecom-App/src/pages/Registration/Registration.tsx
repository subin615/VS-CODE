import React, { useState } from 'react';
import './Registration.css'

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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import CustomInput from '../../common/atom/CustomInput';
import CustomButton from '../../common/atom/CustomButton';
import CustomFormControl from '../../common/atom/CustomFormControl';
import CustomLink from '../../common/atom/CustomLink';

const Registration: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text> */}
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <CustomFormControl id="firstName" type='text' placeholder='first name'>
                                First Name
                            </CustomFormControl>
                            <CustomFormControl id="lastName" type='text' placeholder='last name'>
                                Last Name
                            </CustomFormControl>
                        </HStack>
                        <CustomFormControl id="phone" type='phone' placeholder='phone number'>
                            Phone Number
                        </CustomFormControl>
                        <CustomFormControl id="email" type='email' placeholder='Email Address'>
                            Email address
                        </CustomFormControl>
                        <Box>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <CustomInput type={showPassword ? 'text' : 'password'} placeholder='Password' />
                                    <InputRightElement h={'full'}>
                                        <CustomButton
                                            size='sm'
                                            variant={'ghost'}
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
                            <CustomButton size="lg"
                                bg={'var(--primary-color)'}
                                color={'white'}
                                _hover={{
                                    bg: 'var(--primary-color-800)'
                                }}>Sign up</CustomButton>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user?
                                <CustomLink color={'var(--primary-color)'} to='/login'>Login</CustomLink>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};



export default Registration
