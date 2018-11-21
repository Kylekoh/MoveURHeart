import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() { 
        return (
            <header className="nav-container">
                <nav className="nav-container-wrapper">
                    <div className="nav-left">
                        <span>Move Your Heart</span>
                        <span>무브유어하트 예술심리치유센터</span>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-wrapper">
                            <li className="nav-item"><a href="#main-image">Home</a></li>  
                            <li className="nav-item"><a href="#main-container">About Us</a></li>
                            <li className="nav-item"><a href="#main-ourservice">What We Do</a></li>
                            <li className="nav-item"><a href="#main-service-section">Service</a></li>
                            <li className="nav-item"><a href="#partner-container">Partner</a></li>
                        </ul>
                        <div className="nav-menu-bar"><i class="fas fa-bars"></i></div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;