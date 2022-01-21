import { Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import React from 'react';

interface LinkProps {
    to: string,
    children: string,
    color: string,
}

const CustomLink: React.FC<LinkProps> = (props) => (
    <Link
        color={props.color}
        as={ReachLink}
        to={props.to}
        textDecorationLine='none'
        _focus={{
            boxShadow:
                '0 0 1px 2px var(--primary-color), 0 1px 1px var(--primary-color)',
        }}
    >{props.children}</Link>
)

export default CustomLink;
