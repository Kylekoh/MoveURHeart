import React from 'react';

const OurService = () => {
    return (
        <section id="main-ourservice">
            <div className="ourservice-title">
                What We do
            </div>
            <ul className="service-list">
                <li className="service-item">
                    <div className="service-image-1"></div>
                    <div className="service-wrapper">
                        <span>움직임 중심의 심리치료</span>
                        <ul className="service-items">
                            <li>- 자존감 회복</li>
                            <li>- 대인관계 갈등 해소</li>
                            <li>- 긍정적인 자기 발견</li>
                            <li>- 억압된 감정 조절하기</li>
                        </ul>
                    </div>
                </li>
                <li className="service-item">
                    <div className="service-image-2"></div>
                    <div className="service-wrapper">
                        <span>다양한 예술매체를 이용한 프로그램</span>
                        <ul>
                            <li>- 무용, 미술 등 예술매체의 통합적 사용</li>
                            <li>- 건강한 커뮤니케이션을 돕는 동작심리워크샵</li>
                            <li>- 취향에 맞는 다양한 예술 / 심리 원데이 클래스</li>
                        </ul>
                    </div>
                </li>
                <li className="service-item">
                    <div className="service-image-3"></div>
                    <div className="service-wrapper">
                        <span>1:1 개인 코칭 및 상담</span>
                        <ul>
                            <li> - 자존감, 대인 관계 심리 상담</li>
                            <li> - 내적 성장을 돕는 1:1 개인 코칭</li>
                        </ul>
                    </div>
                </li>                
            </ul>
        </section>
    );
};

export default OurService;