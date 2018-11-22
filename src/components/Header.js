import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.state = {
            isToggledOn : true,
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);        
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
      
    handleMenuBar = () => {
        let x = document.getElementsByClassName("nav-right")[0];
        if(this.state.width < 1150) {
            if(this.state.isToggledOn) {
                x.style.display = "block";
                this.setState ({
                    isToggledOn: false
                })
            } else {
                x.style.display = "none";
                this.setState ({
                    isToggledOn: true
                })
            }
        } else {
            return
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    
    handleClickOutside(event) {
        let x = document.getElementsByClassName("nav-right")[0];
        if (this.state.width < 1150 && x.style.display === "block") {

            if (!this.state.isToggledOn && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                x.style.display = "none";
                this.setState ({
                isToggledOn: true
            })
            } else {
                x.style.display = "block";
                this.setState ({
                    isToggledOn: false
                })
            }
        } else {
            return
        }    
    }

    render() {
        return (
            <header className="nav-container">
                <nav className="nav-container-wrapper">
                    <div className="nav-left">
                        <a href="#main-image">
                            <div className="nav-title-wrapper">
                                <span>Move Your Heart</span>
                                <span>무브유어하트 예술심리치유센터</span>
                            </div>
                        </a>
                        <div className="nav-menu-bar" onClick={this.handleMenuBar}><i className="fas fa-bars"></i></div>
                    </div>
                    <div className="nav-right" ref={this.setWrapperRef}>
                        <ul className="nav-wrapper">
                            <li className="nav-item"><a href="#main-image" onClick={this.handleMenuBar}>Home</a></li>  
                            <li className="nav-item"><a href="#main-container" onClick={this.handleMenuBar}>About Us</a></li>
                            <li className="nav-item"><a href="#main-ourservice" onClick={this.handleMenuBar}>What We Do</a></li>
                            <li className="nav-item"><a href="#main-service-section" onClick={this.handleMenuBar}>Service</a></li>
                            <li className="nav-item"><a href="#partner-container" onClick={this.handleMenuBar}>Partner</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;