import React, {useState} from 'react'
import Course from '../components/Courses'
import MainSection from '../components/Main'
import { SliderData } from '../components/Main/SliderData'
import { TeamData } from '../components/Team/TeamData'
import Navbar from '../components/Navbar'
import Pros from '../components/Pros'
import Reg from '../components/Registration'
import SideBar from '../components/SideBar'
import Team from '../components/Team'
import Tests from '../components/Testings'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <MainSection slides={SliderData} />
        <Course />
        <Tests />
        <Pros />
        <Team slides={TeamData}/>
        <Reg />
        <Footer />
    </>
  )
}

export default Home