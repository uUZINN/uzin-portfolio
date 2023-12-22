import React from 'react'
import { Link } from 'react-router-dom'
import draw01 from '../../assets/img/draw01.png';
import draw02 from '../../assets/img/draw02.png';
import port01 from '../../assets/img/port01.png';
import port02 from '../../assets/img/port02.png';
import port03 from '../../assets/img/port03.png';
import port04 from '../../assets/img/port04.png';
import port05 from '../../assets/img/port05.png';
import mobile01 from '../../assets/img/mobile01.png';
import mobile02 from '../../assets/img/mobile02.png';
import macbook from '../../assets/img/Macbook.png';

const MainSection01 = () => {
    return (
        <section id="mainSection" className="cont_container">
            <div id="headInfo" className="main_text parallax__item__desc">
                <h3>
                    <span className="reveal reveal_BTT split" data-delay="0.1">A PASSIONATE FRONT</span>
                    <span className="reveal reveal_BTT split" data-delay="0.3">END DEVELOPER WHO</span>
                    <span className="reveal reveal_BTT split" data-delay="0.5">IS ALWAYS LEARNING</span>
                    <span className="reveal reveal_BTT split" data-delay="0.7">AND GROWING!</span>
                </h3>
                <p className="ko">
                    안녕하세요. 개발과 지식의 성장을 즐기는 개발자 정유진 입니다. <br />
                    2021년 1월에 UIUX 웹 퍼블리싱 교육을 수료하여, 2년 동안 퍼블리셔로 근무하였습니다. <br />
                    이후 2023년 1월, 프론트엔드 개발 교육을 수료하였습니다.
                </p>
            </div>
            {/* <!-- // main_text --> */}

            <div className="main_intro parallax__item__desc">
                <div className="intro_word">
                    <ul>
                        <span className="en2">EXPERIENCE AND SKILLS</span>
                        <li>WEB PUBLISHING</li>
                        <li>PLANNING</li>
                        <li>MARKETING</li>
                    </ul>
                    <img className="draw_tall parallax__item__desc" src={draw01} alt="" />
                    <ul>
                        <span className="en2">ATTRIBUTE SCORES</span>
                        <li>WEB DEVELOP</li>
                        <li>skill boost</li>
                        <li>WEB DESIGN</li>
                    </ul>
                </div>
                <div className="intro_text">
                    <h3>v2.0(2K24)</h3>
                    <p className="en">by Youzin</p>
                    <p className="ko">
                        웹 언어에 첫 발을 들인 순간부터 현재까지, 시간 공백없이 배움의 시간을 가졌습니다.<br />
                        그만큼 프론트엔드 개발에 열정을 가지고 있으며, 사용자들에게 최고의 경험을 제공하기 위해<br />
                        기술적으로 성장하고, 협업을 통해 사용자에게 친화적인 솔루션을 만들어내는 것이 목표입니다.<br />
                        지속적인 학습과 발전으로 프론트엔드 개발자가 되어, 사람들의 삶을 더 나은 방향으로 이끌어가는데 기여하고 싶습니다.<br />
                        함께 일하고 성장하는 기회를 갖기를 간절히 기대하고 있습니다.
                    </p>
                    <div className="ko add_text">
                        TAILORED HIGH-QUALITY WEB DEVELOPER
                        <Link className="en2" to="https://github.com/uUZINN">https://github.com/uUZINN</Link>
                    </div>
                </div>
            </div>
            {/* <!-- // main_intro --> */}

            <div id="headWork" className="main_work">
                <h3>work</h3>
                <div className="work_port">
                    <div className="work s1">
                        <h4>vue - portfolio site</h4>
                        <p className="ko">react, vue, vite, next를 이용하여 다양한 버전으로 제작해 본 포트폴리오 사이트 입니다.</p>
                        <div className="work_btn">
                            <Link to="https://vue-project2023.vercel.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port01} alt="" />
                    </div>
                    <div className="work s2">
                        <h4>teamwork - go!gyobok site</h4>
                        <p className="ko">
                            php를 이용하여 게시판, 회원가입, 로그인 등 기본적인 기능을 구현하여 제작한 고등학교 교복 소개 사이트 입니다.
                            <em>Headcount : 4 members / Timeline : 3 weeks</em>
                        </p>
                        <div className="work_btn">
                            <Link to="http://dbwls8751.dothome.co.kr/blog_php/main/main.php" target="_blank"
                                className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/gogyobok-blogSite" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port02} alt="" />
                    </div>
                    <div className="work s3">
                        <h4>vue - movideo</h4>
                        <p className="ko">vue와 tmdb의 api를 활용하여 최신 영화 정보를 제공하는 사이트를 제작하였습니다.</p>
                        <div className="work_btn">
                            <Link to="https://vue-movie-project2024.netlify.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/movie-project" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port03} alt="" />
                    </div>
                    <div className="work s4">
                        <h4>react - fashion youtube</h4>
                        <p className="ko">리액트를 이용하여 패션관련 유튜브 영상만 모아볼 수 있는 사이트를 제작하였습니다.</p>
                        <div className="work_btn">
                            <Link to="https://youtube-project2023.netlify.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/youtube-project" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port04} alt="" />
                    </div>
                    <div className="work s5">
                        <h4>teamwork - Dating Simulation</h4>
                        <p className="ko">
                            자바스크립트를 이용하여 웹툰을 소재로 연애 시뮬레이션 게임을 제작하였습니다.
                            <em>Headcount : 3 members / Timeline : 2 weeks</em>
                        </p>
                        <div className="work_btn">
                            <Link to="https://uuzinn.github.io/dating-quizSite/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/dating-quizSite" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port05} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- // main_work --> */}

            <div className="main_bike parallax__item__desc">
                <div className="bike_text ko">
                    <p className='split'>
                        <em>FIRST. </em>
                        시대별로 유행을 타지 않고 꾸준히 사랑받는 패션이 있는 것처럼, 세월이 흘러도 사람들이
                        불편함 없이 즐겨 사용할 수 있는 사이트를 만들어내는 개발자가 되기 위해 항상 달려나가겠습니다.
                    </p>
                    <p className='split'>
                        <em>SECOND. </em>
                        사용자 경험을 개선하는데 열정을 가지고 있으며, 협업과 지속적인
                        성장을 통해 노력으로 발전하는 프론트앤드 개발자로 성장하겠습니다.
                    </p>
                </div>
                <div className="bike_cont">
                    <h3 className='split'>
                        CREATING MEMORABLE
                        SITES WITH YOU
                    </h3>
                    <img className="parallax__item__bike" src={draw02} alt="" />
                    <h3 className='split'>& TAILORED WEBSITES.</h3>
                    <p className='split'>ALWAYS BESPOKE. NEVER OFF-THE-SHELF.</p>
                </div>
            </div>
            {/* <!-- // main_bike --> */}

            <div className="main_mobile">
                <div className="mobile_ani">
                    <div className="mobile01">
                        <img className="i1" src={mobile02} alt="" />
                    </div>
                    <div className="macbook">
                        <img className="i2" src={macbook} alt="" />
                    </div>
                    <div className="mobile02">
                        <img className="i3" src={mobile01} alt="" />
                    </div>
                </div>

            </div>
            {/* <!-- // main_mobile --> */}

        </section>
    )
}

export default MainSection01