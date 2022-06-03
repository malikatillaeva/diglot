import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#017f36' : '#fff')};
    width: 100vw;
    height: 84px;
    margin-top: -84px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    font-size: 16px;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 84px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 26px 0 20px 24px;
    width: 99px;
    height: 38px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 84px;
`

export const NavLinks = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #000;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 5px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #017F36;
    font-size: 16px;
    border: 1px solid grey;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #017F36;
        color: #fff;
    }
`
export const NavBtnLg = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLgLink = styled(LinkR)`
color: #000;
font-size: 16px;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
`