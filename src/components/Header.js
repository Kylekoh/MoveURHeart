import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() { 
        return (
            <header className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-left">
                        <span>Move Your Heart</span>
                        <span>무브유어하트 예술심리치유센터</span>
                    </div>
                    <nav className="nav-right">
                        <ul className="nav-wrapper">
                            <li className="nav-item"><a href="#main-image">Home</a></li>  
                            <li className="nav-item"><a href="#main-container">About Us</a></li>
                            <li className="nav-item"><a href="#main-ourservice">What We Do</a></li>
                            <li className="nav-item"><a href="#main-service-section">Service</a></li>
                            <li className="nav-item"><a href="#partner-container">Partner</a></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;