import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const DashboardContainer = styled.div`
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const DashboardMenuBars = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`

export const Icon = styled(FaBars)`
    color: #000;
`

export const DashboardMenu = styled.nav`
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    //left: -100%;
    transition: 850ms;

    &.active {
        left: 0;
        transition: 350ms;
    }
`

export const DashboardMenuItems = styled.ul`
    width: 100%;
`

export const DashboardToggle = styled.li`
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const MenuText = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
`

export const MenuIcons = styled(Link)`
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
        background-color: #1a83ff;
    }
`

export const MenuTitle = styled.span`
    margin-left: 16px;
`
