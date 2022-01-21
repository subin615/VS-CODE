import React from 'react';
import { Input } from '@chakra-ui/react';

interface InputProps {
  type: string,
  placeholder: string,
  className?: string
}
const CustomInput = (props: InputProps) => (

  <Input type={props.type} placeholder={props.placeholder} className={props.className}
    _focus={{
      boxShadow:
        '0 0 1px 2px var(--primary-color), 0 1px 1px var(--primary-color)',
    }} />
);

export default CustomInput;
