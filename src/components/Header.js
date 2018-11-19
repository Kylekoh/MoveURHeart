import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() {
        return (
            <Fragment>
            <nav className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-left">
                        <span>Move Your Heart</span>
                        <span>무브유어하트 예술심리치유센터</span>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-wrapper">    
                            <li className="nav-item">About Us</li>
                            <li className="nav-item">What We Do</li>
                            <li className="nav-item">Service</li>
                            <li className="nav-item">Partner</li>
                            <li className="nav-item">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
            </Fragment>     
        );
    }
}

export default Header;