import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='главная' onClick={toggle}>Главная</SideBarLink>
                <SideBarLink to="курсы" onClick={toggle}>Курсы</SideBarLink>
                <SideBarLink to="преимущества" onClick={toggle}>Преимущества</SideBarLink>
                <SideBarLink to="команда" onClick={toggle}>Команда</SideBarLink>
                <SideBarLink to="тесты" onClick={toggle}>Тесты</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>    
                <SideBarRoute to='reg'>Подать заявку</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar