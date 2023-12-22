import React from 'react'
import yellowBg from '../../assets/img/main_yellow_bg-min.jpg';
import iconF from '../../assets/img/icon_f.png';
// import iconB from '../../assets/img/icon_d.png';

const MainSection02 = () => {
    return (
        <section id="mainSection">
            <div className="main_career">
                <div className="career_bg parallax__item__desc">
                    <img src={yellowBg} alt="" />
                </div>

                <div className="career_first parallax__item__desc">
                    <h3 data-aos="fade-up">
                        I STRIVE FOR CREATIVE DESIGN
                        AND DEVELOPMENT TAILORED
                        FOR EXPANDING WEBSITES.
                    </h3>
                    <p className="en">Uzin Developer</p>
                </div>
                <div className="career_second parallax__item__desc">
                    <div className="career_cont">
                        <div className="career_icon .donate-crypto-box">
                            <div class="coin">
                                <div class="coin-face">
                                    <img src={iconF} alt="" className="icon_f" />
                                </div>
                                <div class="coin-face"></div>
                                <div class="coin-face"></div>
                                <div class="coin-face"></div>
                                <div class="coin-face">
                                    <img src={iconF} alt="" className="icon_f" />
                                </div>
                            </div>
                            {/* <img src={iconF} alt="" className="icon_f" /> */}
                            {/* <img src="assets/img/icon_d.png" alt="" className="icon_d blind" /> */}
                        </div>
                        <div className="career_list">
                            <div className="stack">
                                <h4>my technical stack</h4>
                                <ul className="ko">
                                    <li>JAVASCRIPT&nbsp;&nbsp;&nbsp;JQUERY&nbsp;&nbsp;&nbsp;REACT&nbsp;&nbsp;&nbsp;VUE&nbsp;&nbsp;&nbsp;VITE&nbsp;&nbsp;&nbsp;NEXT.JS
                                    </li>
                                    <li>HTML&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;SCSS</li>
                                    <li>PHOTOSHOP&nbsp;&nbsp;&nbsp;ILLUSTRATER&nbsp;&nbsp;&nbsp;ADOBE
                                        XD&nbsp;&nbsp;&nbsp;FIGMA</li>
                                    <li>MONGODB&nbsp;&nbsp;&nbsp;MONGOOSE&nbsp;&nbsp;&nbsp;PHP&nbsp;&nbsp;&nbsp;PHPMYADMIN
                                    </li>
                                    <li>GIT&nbsp;&nbsp;&nbsp;GITHUB</li>
                                    <li>FILEZILLA&nbsp;&nbsp;&nbsp;NETLIFY</li>
                                    <li>POSTMAN&nbsp;&nbsp;&nbsp;VS
                                        CODE&nbsp;&nbsp;&nbsp;GNUBOARD&nbsp;&nbsp;&nbsp;CAFE24</li>
                                </ul>
                            </div>
                            <div className="career">
                                <h4>my short career</h4>
                                <ul className="ko">
                                    <li>한양여자대학교 - 니트패션디자인과 전공 <span>2017.02 ~ 2020.02 (졸업)</span></li>
                                    <li>대한섬유 - 니트 프로그래머 <span>2020.01 ~ 2020.07 (7개월)</span></li>
                                    <li>라인컴퓨터아트학원 - 웹 퍼블리셔디자인 수료 <span>2020.08 ~ 2021.01 (졸업)</span></li>
                                    <li>그리다인 - 웹 퍼블리셔 <span>2021.05 ~ 2023.07 (2년)</span></li>
                                    <li>라인컴퓨터아트학원 - 프론트앤드 개발 수료 <span>2023.08 ~ 2024.01 (졸업예정)</span></li>
                                    <li>I am waiting for your company</li>
                                    <li>to fill this next position.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="career_text ko">
                    매력적인 프론트엔드는 사용자들의 경험을 개선하며 직관적이고 시각적으로 매력있는 인터페이스를 제공하는 것입니다.<br />
                    I will become an appealing frontend developer.
                </div>
            </div>
            {/* <!-- // main_career --> */}
        </section>
    )
}

export default MainSection02