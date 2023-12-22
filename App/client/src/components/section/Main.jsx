import React from 'react'
import MainHeader from '../header/MainHeader'
import MainContent from '../header/MainContent'
import MainBottom from '../header/MainBottom'

const Main = (props) => {
  return (
    <main id="main" class="main_container">
        <MainHeader />
        <MainContent />
        <MainBottom />
    </main>
  )
}

export default Main