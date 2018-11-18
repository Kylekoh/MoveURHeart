import React, { Component } from 'react';
import Slider from './Slider';

class MainService extends Component {
    render() {      
        return (
            <section className="main-service-container">
                <div className="main-service-title">
                    Main Service
                </div>
                <div className="main-service-wrapper">
                    <div className="main-service-desc">
                        <div className="service-target">
                            <h2>교육 대상</h2>
                            <p>아동 및 청소년</p>
                        </div>
                        <div className="service-content">
                            <h2>교육 내용</h2>
                            <p>무브유어하트는 이 시기의 아동 및 청소년들의 심리와 신체를 이해하고
    그에 맞는 올바른 정서,신체의 균형과 표현을 돕습니다.</p>
                        </div>
                        <div className="service-program">
                            <h2>교육 프로그램</h2>
                            <p>무브유어하트는 이 시기의 아동 및 청소년들의 심리와 신체를 이해하고
    그에 맞는 올바른 정서,신체의 균형과 표현을 돕습니다.</p>
                        </div>
                    </div>
                    <Slider/>
                </div>
                <div className="main-service-wrapper">
                    <div className="main-service-desc">
                        <div className="service-target">
                            <h2>교육 대상</h2>
                            <p>일반인 및 기업 대상</p>
                        </div>
                        <div className="service-content">
                            <h2>교육 내용</h2>
                            <p>무브유어하트는 이 시기의 아동 및 청소년들의 심리와 신체를 이해하고
    그에 맞는 올바른 정서,신체의 균형과 표현을 돕습니다.</p>
                        </div>
                        <div className="service-program">
                            <h2>교육 프로그램</h2>
                            <p>무브유어하트는 이 시기의 아동 및 청소년들의 심리와 신체를 이해하고
    그에 맞는 올바른 정서,신체의 균형과 표현을 돕습니다.</p>
                        </div>
                    </div>
                    <Slider/>
                </div>
             </section>
        );
    }
}

export default MainService;