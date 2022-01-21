import { Box, ComponentWithAs, FormControl, FormLabel, FormLabelProps } from '@chakra-ui/react';
import React from 'react';
import CustomInput from './CustomInput';

interface FormControlProps {
    id: string,
    children: string,
    type: string,
    placeholder: string,
}

const CustomFormControl: React.FC<FormControlProps> = (props) => (
    <Box>
        <FormControl id={props.id} isRequired>
            <FormLabel>{props.children}</FormLabel>
            <CustomInput type={props.type} placeholder={props.placeholder} />
        </FormControl>
    </Box>
)

export default CustomFormControl;
