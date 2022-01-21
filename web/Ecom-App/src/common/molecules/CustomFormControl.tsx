import { Box, ComponentWithAs, FormControl, FormLabel, FormLabelProps } from '@chakra-ui/react';
import React from 'react';
import CustomInput from '../atom/CustomInput';

interface FormControlProps {
    id: string,
    children: string,
    type: string,
    placeholder: string,
    isRequired?: boolean
}

const CustomFormControl: React.FC<FormControlProps> = (props) => (
    <Box>
        <FormControl id={props.id} isRequired={props.isRequired}
        >
            <FormLabel>{props.children}</FormLabel>
            <CustomInput type={props.type} placeholder={props.placeholder} />
        </FormControl>
    </Box>
)

export default CustomFormControl;
