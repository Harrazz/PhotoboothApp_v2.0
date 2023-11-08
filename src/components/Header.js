import React from 'react';
import '../styles/header.css'
import logo from '../images/camera.png'

const Header = () => {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className="logo-camera" />
                <h2 class="logo">Photo Booth App</h2>
            </header>
        </div>
    )
}
export default Header;