import React from 'react'
import './Header.css'
import Logo from '../../assets/gym1.png'

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} className="logo" />
            <ul className="header-menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
            </ul>
        </div>
    )
}

export default Header
