import { Select } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

interface SelectProps {
    variant: string,
    placeholder: string,
    children: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
    isRequired?: boolean
}

const CustomSelect: React.FC<SelectProps> = (props) => (
    <Select
        variant={props.variant}
        placeholder={props.placeholder}
        onChange={props.onChange}
        isRequired={props.isRequired}
        _focus={{
            boxShadow:
                '0 0 1px 2px var(--primary-color), 0 1px 1px var(--primary-color)',
        }}
    >{props.children}</Select>
)

export default CustomSelect;
