import React from 'react';

const Contact = () => {
    return (
        <div className="main-contact">
            <div className ="main-contact-wrapper">
                <div className="contact-title">
                    Contact
                </div>
                <div className="contact-wrapper">
                    <div className="contact-container">
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i> 서울, 경기, 인천</li>
                            <li><i className="fas fa-mobile-alt"></i> 010-3086-9311</li>
                            <li><i className="far fa-envelope"></i> 6647show@naver.com</li>
                        </ul>
                        <ul className="contact-sns">
                            <li><i class="fab fa-instagram"></i></li>
                            <li><i class="fab fa-facebook-square"></i></li>
                            <li><i class="fab fa-twitter-square"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                        </ul>  
                    </div>  
                    <div className="contact-form-container">
                        <form action="https://formspree.io/ykoh728@gmail.com" method="POST">
                            <input type="hidden" name="_subject" value="New submission!" />
                            <input type="text" name="name"/>
                            <input type="email" name="_replyto"/>
                            <input type="submit" value="Send"/>
                            <input type="hidden" name="_next" value="https://site.io/thanks.html" />
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Contact;