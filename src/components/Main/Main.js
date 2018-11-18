import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import MainService from './MainService';
import Partner from './Partner';
import OurService from './OurService';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-image">
                    <div className="main-image-title">
                        Movement Psychotherapy?
                    </div>
                    <span className="main-image-sub">
                        “It is not about the Dance, but about using movement as a tool of communication.<br/> 
                        It is about connecting movement to psychological process.”
                    </span>
                </div>
                <main className="main-container">
                    <div className="main-title">
                        About Us
                    </div>
                    <div className="main-introduce">
                        <div className="introduce-image-container">
                            <div className="introduce-image">
                            </div>
                        </div>
                        <span className="introduce">무브유어하트 예술심리치유센터는 다양한 심리적 문제 해결
    혹은 더 나은 자신을 만나고자 하는 분들을 위한 심리치유 서비스를 제공합니다.
    특히 우리의 신체와 움직임에 담긴 마음을 발견하고 건강하게 표현하는 데 도움이 될 것입니다</span>
                    </div>
                    <OurService/>
                    <MainService/>
                    <Partner/>
                    <Contact/>
                </main>
            </Fragment>
        );
    }
}

export default Main;