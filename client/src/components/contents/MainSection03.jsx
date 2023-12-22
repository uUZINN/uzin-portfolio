import React from 'react'
import { Link } from 'react-router-dom'
import circle01 from '../../assets/img/circle01.png';
import circle02 from '../../assets/img/circle02.png';
import circle03 from '../../assets/img/circle03.png';
import circle04 from '../../assets/img/circle04.png';
import circle05 from '../../assets/img/circle05.png';
import circle06 from '../../assets/img/circle06.png';

import blueCircle01 from '../../assets/img/blue_circle01.png';
import blueCircle02 from '../../assets/img/blue_circle02.png';
import blueCircle03 from '../../assets/img/blue_circle03.png';
import blueCircle04 from '../../assets/img/blue_circle04.png';
import blueCircle05 from '../../assets/img/blue_circle05.png';
import blueCircle06 from '../../assets/img/blue_circle06.png';

import work01 from '../../assets/img/work01.png';
import work02 from '../../assets/img/work02.png';
import work03 from '../../assets/img/work03.png';
import work04 from '../../assets/img/work04.png';
import work05 from '../../assets/img/work05.png';
import work06 from '../../assets/img/work06.png';


const MainSection03 = () => {
    return (
        <section id="mainSection" className="cont_container mainSection_03">
            <div className="main_text02">
                <h3 className='split'>
                    <span>A frontend developer el-</span>
                    <span>evating user experiences</span>
                    <span>through tech and design</span>
                </h3>

                <p className="ko">
                    A passionate frontend developer dedicated to enhancing<br />
                    user experiences through innovative technology and design.
                </p>
            </div>
            <div className="main_record">

                <div className="circle_wrap">
                    <div className="circle_cont">
                        <div className="circle">
                            <div className="parallax__item__img c1">
                                <img src={circle01} alt="" />
                            </div>
                            <div className="parallax__item__img c2">
                                <img src={circle02} alt="" />
                            </div>
                            <div className="parallax__item__img c3">
                                <img src={circle03} alt="" />
                            </div>
                            <div className="parallax__item__img c4">
                                <img src={circle04} alt="" />
                            </div>
                            <div className="parallax__item__img c5">
                                <img src={circle05} alt="" />
                            </div>
                            <div className="parallax__item__img c6">
                                <img src={circle06} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="circle_cont">
                        <div className="blue_circle">
                            <div className="parallax__item__img c1">
                                <img src={blueCircle01} alt="" />
                            </div>
                            <div className="parallax__item__img c2">
                                <img src={blueCircle02} alt="" />
                            </div>
                            <div className="parallax__item__img c3">
                                <img src={blueCircle03} alt="" />
                            </div>
                            <div className="parallax__item__img c4">
                                <img src={blueCircle04} alt="" />
                            </div>
                            <div className="parallax__item__img c5">
                                <img src={blueCircle05} alt="" />
                            </div>
                            <div className="parallax__item__img c6">
                                <img src={blueCircle06} alt="" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="work">
                    <div className="work_title w1">
                        <h5>work script - search game</h5>
                        <p className="ko">
                            자바스크립트를 이용하여 검색기능을 구현한 서치게임 사이트를 제작하였습니다.
                            다양한 메소드를 사용하여 여러 형태의 검색 기능을 구현하였습니다.
                        </p>
                        <Link to="https://uuzinn.github.io/webs2024/javascript/search/index.html" target="_blank"><img
                            src={work01} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>THREE.JS</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w2">
                        <h5>work script - gsap effect</h5>
                        <p className="ko">
                            GSAP는 애니메이션 효과를 제공해 웹사이트에 부드럽고 다양한 움직임을 구현할 수 있습니다.
                            요소들이 부드럽게 나타나거나 사라지며, 회전하거나 움직이는 등 다채로운
                            애니메이션을 연습해보았습니다.
                        </p>
                        <Link to="https://uuzinn.github.io/webs2024/javascript/gsap/gsap01.html" target="_blank"><img
                            src={work02} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>GSAP&nbsp;&nbsp;Lenis</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w3">
                        <h5>work script - slider effect</h5>
                        <p className="ko">
                            제이쿼리와 자바스크립트를 이용하여 슬라이드 효과를 여러가지 형태로 연습하였습니다.
                            fadeIn / fadeOut, 상하 또는 좌우로 움직이는 효과를 구현하였습니다.
                        </p>
                        <Link to="https://uuzinn.github.io/webs2024/javascript/slider/slider01.html" target="_blank"><img
                            src={work04} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>jquery&nbsp;&nbsp;JAVASCRIPT</li>
                            <li>HTML&nbsp;&nbsp;CSS</li>
                        </ul>
                    </div>
                    <div className="work_title w4">
                        <h5>work script - mouse effect</h5>
                        <p className="ko">
                            자바스크립트를 이용하여 마우스 효과를 연습하였습니다.
                            mousemove, mouseenter, mouseleave, mouseover, mouseout 등의 메소드를 활용하여
                            다양한 효과를 구현하였습니다.
                        </p>
                        <Link to="https://uuzinn.github.io/webs2024/javascript/mouse/mouse01.html" target="_blank"><img
                            src={work06} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>GSAP</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w5">
                        <h5>work script - quiz game</h5>
                        <p className="ko">
                            자바스크립트와 json을 이용하여 다양한 퀴즈 형태의 사이트를 제작하였습니다.
                            여러가지 메소드를 사용하여 객관식, 주관식, 4지선다형 등 다양한 형식으로 연습하였습니다.
                        </p>
                        <Link to="https://uuzinn.github.io/webs2024/javascript/quiz/quizEffect01.html"
                            target="_blank"><img src={work03} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>JSON</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w6">
                        <h5>work php - simple blog</h5>
                        <p className="ko">
                            php를 이용하여 간단한 블로그 사이트를 제작하였습니다.
                            회원가입, 로그인, 게시판, 블로그 등 기본적인 기능을 구현하였습니다.
                        </p>
                        <Link to="http://uzin4916.dothome.co.kr/php/board/board.php" target="_blank"><img
                            src={work05} alt="" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>php&nbsp;&nbsp;phpmyadmin&nbsp;&nbsp;mysql</li>
                            <li>HTML&nbsp;&nbsp;CSS</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainSection03