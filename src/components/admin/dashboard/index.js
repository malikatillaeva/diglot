import React, {useState} from 'react'
import { DashboardContainer, DashboardMenuBars, Icon, DashboardMenu, DashboardMenuItems, DashboardToggle, CloseIcon, MenuText, MenuIcons, MenuTitle} from './DashboardElements'
import { DashboardData } from './DashboardData'
import { IconContext } from 'react-icons'

function Dashboard() {
    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <DashboardContainer>
            <DashboardMenuBars to='#'>
                <Icon onClick={showSidebar}/>
            </DashboardMenuBars>
        </DashboardContainer>
        <DashboardMenu>
            <DashboardMenuItems onClick={showSidebar}> 
                <DashboardToggle>
                    <DashboardMenuBars to='#'>
                        <CloseIcon />
                    </DashboardMenuBars>
                </DashboardToggle>
                {DashboardData.map((item, index) => {
                    return (
                        <MenuText key={index}>
                            <MenuIcons to={item.path}>
                                {item.icon}
                                <MenuTitle>{item.title}</MenuTitle>
                            </MenuIcons>
                        </MenuText>
                    )
                })}
            </DashboardMenuItems>
        </DashboardMenu>
    </IconContext.Provider>
    </>
  )
}

export default Dashboard