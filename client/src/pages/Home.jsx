import React from 'react'
import Main from '../components/section/Main'
import MainSection01 from '../components/contents/MainSection01'
import MainSection02 from '../components/contents/MainSection02'
import MainSection03 from '../components/contents/MainSection03'
import MainSection04 from '../components/contents/MainSection04'
import MainSection05 from '../components/contents/MainSection05'
import '../assets/js/main.js';

const Home = () => {
  return (
    <div id="wrap">
        <Main />
        <MainSection01 />
        <MainSection02 />
        <MainSection03 />
        <MainSection04 />
        <MainSection05 />
    </div>
  )
}

export default Home