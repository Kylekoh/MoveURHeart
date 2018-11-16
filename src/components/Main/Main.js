import React, { Component } from 'react';
import Contact from './Contact';
import FAQ from './FAQ';
import Partner from './Partner';
import OurService from './OurService';

class Main extends Component {
    render() {
        return (
            <main className="main-container">
                <div className="main-introduce">
                    <div className="introduce-image-container">
                        <div className="introduce-image">
                        </div>
                    </div>
                    <div className="introduce">무브유어하트 예술심리치유센터는 다양한 심리적 문제 해결
혹은 더 나은 자신을 만나고자 하는 분들을 위한 심리치유 서비스를 제공합니다.
특히 우리의 신체와 움직임에 담긴 마음을 발견하고 건강하게 표현하는 데 도움이 될 것입니다</div>
                </div>
                <OurService/>
                <Partner/>
                <FAQ/>
                <Contact/>
            </main>
        );
    }
}

export default Main;