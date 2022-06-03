import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
  return (
    <>
    <ul onClick={handleClick} classname={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        <li>Ru</li>
        <li>En</li>
        <li>Uz</li>
        </ul> </>
  )
}

export default Dropdown