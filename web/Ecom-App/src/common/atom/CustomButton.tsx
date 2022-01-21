import { Button, ComponentWithAs, IconProps } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';

interface ButtonProps {
    size: string,
    bg?: string,
    color?: string,
    _hover?: {
        bg: string,
    },
    variant?: string,
    children: string | ComponentWithAs<"svg", IconProps> | ReactElement<any, any> | ReactNode,
    onClick?: () => void
}

const CustomButton: React.FC<ButtonProps> = (props) => (
    <Button
        size={props.size}
        bg={props.bg}
        color={props.color}
        _hover={{ bg: props.bg }}
        variant={props.variant}
        _focus={{
            boxShadow:
                '0 0 1px 2px var(--primary-color), 0 1px 1px var(--primary-color)',
        }}
        onClick={props.onClick}
    >{props.children}</Button>
)

export default CustomButton;
