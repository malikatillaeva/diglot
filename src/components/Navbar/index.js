import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavBtnLg, NavBtnLgLink} from './NavbarElements';
import Navlogo from '../../images/diglot-logo.png'
import Dropdown from './dropdown';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} src={Navlogo} type='DiglotLogo/png'/>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="главная" smooth={true} duration={500} spy={true} exact='true' offset={-84}>Главная</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="курсы" smooth={true} duration={500} spy={true} exact='true' offset={-84} >Курсы</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="тесты" smooth={true} duration={500} spy={true} exact='true' offset={-84} >Тесты</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="преимущества" smooth={true} duration={500} spy={true} exact='true' offset={-84} >Преимущества</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="команда" smooth={true} duration={500} spy={true} exact='true' offset={-84} >Команда</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='reg'>Подать заявку</NavBtnLink>
                </NavBtn>
                <NavBtnLg>
                    <NavBtnLgLink to='/ru'>РУ</NavBtnLgLink>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                    </svg>
                    {dropdown && <Dropdown />}</NavBtnLg>
            </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;