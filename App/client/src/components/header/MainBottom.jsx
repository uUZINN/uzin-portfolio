import React from 'react'
import { Link } from 'react-router-dom'
import mainEst from '../../assets/img/main_est.svg';
import mainBox from '../../assets/img/main_box.svg';
import mainBotBanner from '../../assets/img/main_bot_banner.png';

const MainBottom = () => {
  return (
    <div className="main_bottom">
        <div className="main_bottom01">
            <img className="w50" src={mainEst} alt="" />
            <div className="flow_banner w50">
                <ul className="list">
                    <li>frontend</li>
                    <li>developer</li>
                    <li>everylineof</li>
                    <li>codeyouwirte</li>
                    <li>isastory:make</li>
                </ul>
            </div>
            <img src={mainBox} alt="" />
        </div>
        <div className="main_bottom02">
            <div className="main_bottom02_title">
                <p>INNOVATE CODE IN 2024.</p>
                <ul>
                    <li><Link to="#">website</Link></li>
                    <li><Link to="#">interface</Link></li>
                    <li><Link to="#">design</Link></li>
                </ul>
            </div>
            <p className="ko">FRONT-END DEVELOPERS ARE RELLENTLESS CREATORS, CONSTANTLY EVOLVING TO ENHANCE
                USER EXPERIENCES AND CRAFT INTERFACES THAT MARRY BEAUTY WITH FUNCTIONALITY.</p>
        </div>
        <div className="main_bottom03">
            <img src={mainBotBanner} alt="" />
            <div className="main_bottom03_text">
                <Link to="#">
                    <p>user interface</p>
                    <p className="ko">developer</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MainBottom