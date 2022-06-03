import styled from 'styled-components'
import {Link}  from 'react-scroll'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#fff' : '#017F36')};
    padding: ${({big}) => (big ? '11px 25px' : '12px 65px')};
    color: ${({dark}) => (dark ? '#017F36' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#017F36' : '#fff')};
        color: ${({primary}) => (primary ? '#fff' : '#017F36')};
    }
`