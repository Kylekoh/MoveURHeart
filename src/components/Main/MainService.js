import React, { Component } from 'react';
import SliderJunior from './SliderJunior';
import SliderGeneral from './SliderGeneral';


class MainService extends Component {
    state = {
        junior: false,
        general: false,
        senior: false
    }

    render() {
        return (
            <section id="main-service-section">
                <div className="main-service-container">
                    <div className="main-service-title">
                        Main Service
                    </div>
                    <div className="main-service-wrapper">
                        <div className="main-service-desc">
                            <div className="service-target">
                                <h2>아동 및 청소년 예술심리 치료 / 치유</h2>
                            </div>
                            <div className="service-content">
                                <h2>프로그램 내용</h2>
                                <ul>
                                    <li>2~5회기 학급 단위 힐링프로그램</li>
                                    <li>10~12회기 집단예술치료 / 치유 프로그램</li>
                                    <li>개인 상담 / 치료</li>
                                    <li>무용동작심리 관련 강의</li>
                                </ul>
                            </div>
                            <div className="service-program">
                                <h2>주요 대상</h2>
                                <ul>
                                    <li>학교 부적응 아동 및 청소년</li>
                                    <li>예술매체를 통한 힐링이 필요한 학급</li>
                                </ul>
                            </div>
                        </div>
                        <SliderJunior/>
                    </div>
                    <div className="main-service-wrapper">
                        <div className="main-service-desc">
                            <div className="service-target">
                                <h2>성인 대상 동작중심 심리워크샵</h2>
                            </div>
                            <div className="service-content">
                                <h2>프로그램 내용</h2>
                                <ul>
                                    <li>기업 조직역랑 강화 워크샵</li>
                                    <li>예술 / 심리를 통한 힐링 원데이 클래스</li>
                                    <li>기업 및 교직원 강의</li>
                                    <li>개인 상담 / 치료</li>
                                </ul>
                            </div>
                            <div className="service-program">
                                <h2>주요 대상</h2>
                                <ul>
                                    <li>직원들의 건강한 소통과 성장에 관심있는 기업 및 단체</li>
                                    <li>예술 매체를 통한 마음의 치유가 필요한 개인</li>
                                </ul>
                            </div>
                        </div>
                        <SliderGeneral />
                    </div>
                </div>
             </section>
        );
    }
}

export default MainService;