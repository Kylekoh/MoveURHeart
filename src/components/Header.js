import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="nav-container">
                <ul className="nav-wrapper">
                    <li className="nav-item">About</li>
                    <li className="nav-item">Partner</li>
                    <li className="nav-item">Contact</li>
                    <li className="nav-item">오시는길</li>
                </ul>
            </nav>
        );
    }
}

export default Header;