import React from 'react'
import { ReactComponent as YourSvg } from '../../assets/logo-light.svg';
import './Menu.css';
function Menu() {
  return (
    <div>
        {/*--==================== HEADER ====================--> */}
        <ul>
            <li><a href="#home" className="nav__logo" id="nav__logo"><YourSvg/></a></li>
            <li><a  href="#home">Home</a></li>
            <li><a href="#news">Procentage</a></li>
            <li><a href="#contact">Spread</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        
    </div>
    
  )
}

export default Menu