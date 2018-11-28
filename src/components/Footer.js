import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-container">    
                <div className ="main-contact-wrapper">
                    <div className="contact-wrapper">
                        <p>무브유어하트 : 대표 최영석</p>
                        <ul className="contact">                                
                            <li><i className="fas fa-map-marker-alt"></i> 서울, 경기, 인천</li>
                            <li><i className="fas fa-mobile-alt"></i> 010-3086-9311</li>
                            <li><i className="far fa-envelope"></i> 6647show@naver.com</li>
                            <li><div className="kakao-image"></div>Youngseokcc</li>
                        </ul>
                    </div>
                    <div className="contact-sns-wrapper">
                        <ul className="contact-sns">
                            <li><a href=""></a></li>
                            <li><a href="https://www.instagram.com/chesonghaeyo/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/youngseok.bao"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://twitter.com/youngbao"><i className="fab fa-twitter-square"></i></a></li>
                        </ul>
                        <p>2018 MOVE YOUR HEART. ALL RIGHTS RESERVED.</p>
                    </div> 
                </div> 
                
             </footer>
        );
    }
}

export default Footer;