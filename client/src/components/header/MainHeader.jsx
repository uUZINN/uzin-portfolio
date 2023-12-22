import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div class="main_header">
        <Link to="#headInfo">
            <span class="ko">Introduce</span>
            INFO
        </Link>
        <p>AVAILABLE FOR COMMISSIONS 2024</p>
        <Link to="#headWork">
            <span class="ko">Portfolio</span>
            WORK
        </Link>
    </div>
  )
}

export default MainHeader