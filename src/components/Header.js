import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isToggledOn : true,
            width: 0,
            height: 0,
            addClass: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);    
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);  
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

    handleScroll() {
        if (window.scrollY > 550) {
            this.setState({
              addClass: true
            })      
          } else if (window.screenY < 550) {
            this.setState({
              addClass: false
            })
        }
    }

    render() {
        let navClass = ['nav-container'];
        let spanClass = [];
        let liClass = ['nav-item'];
        if(this.state.addClass) {
          navClass.push('colored');
          spanClass.push('colored-span');
          liClass.push('colored-li');
        } else {
            navClass.slice('colored');
            spanClass.slice('colored-span');
            liClass.slice('colored-li');
        }
        return (
            <header className={navClass.join(' ')}>
                <nav className="nav-container-wrapper">
                    <div className="nav-left">
                        <a href="#main-image">
                            <div className="nav-title-wrapper">
                                <span>Move Your Heart</span>
                                <span className={spanClass.join(' ')}>무브유어하트 예술심리치유센터</span>
                            </div>
                        </a>
                        <div className="nav-menu-bar" onClick={this.handleMenuBar}><i className="fas fa-bars"></i></div>
                    </div>
                    <div className="nav-right" ref={this.setWrapperRef}>
                        <ul className="nav-wrapper">
                            <li className="nav-item"><a href="#main-image" className={liClass.join(' ')} onClick={this.handleMenuBar}>Home</a></li>  
                            <li className="nav-item"><a href="#main-container" className={liClass.join(' ')} onClick={this.handleMenuBar}>About Us</a></li>
                            <li className="nav-item"><a href="#main-ourservice" className={liClass.join(' ')} onClick={this.handleMenuBar}>What We Do</a></li>
                            <li className="nav-item"><a href="#main-service-section" className={liClass.join(' ')} onClick={this.handleMenuBar}>Service</a></li>
                            <li className="nav-item"><a href="#partner-container" className={liClass.join(' ')} onClick={this.handleMenuBar}>Partner</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;