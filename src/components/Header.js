import React from 'react'

import backgroundImage from '../assets/main/background.png'
import customizeIcon from '../assets/icons/customize_icon.png'

const Header = () => {
  return (
    <div className="h-screen">
        <img id="background" alt="Trek bike background" src={backgroundImage} className="w-screen h-screen object-cover absolute -z-10" />

        <div className="container m-auto px-6">
            <nav className="flex justify-between items-center h-16">
                <p id="logo" className="text-xs sm:text-base font-bold text-white tracking-normal sm:tracking-wide">Bikes <span className="text-xs sm:text-base font-normal text-white">by </span><span className="text-2xl sm:text-3xl font-bold text-white">CED</span></p>
                <p id="developer" className="sm:text-xs font-bold tracking-normal sm:tracking-wide text-white"><span id="text_xxs" className="font-normal text-white">DEVELOPED BY:</span> JOHN CEDRICK BAYHON</p>
            </nav>
            <div className="flex flex-col items-center mt-28">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">PROJECT ONE</h1>
                <p className="text-base md:text-xl text-white text-center mt-5">Build your dream bike. Exactly as you imagined it.</p>
                <button className="text-white flex items-center gap-3 lg:gap-4 border-2 border-white rounded-lg lg:rounded-xl px-4 py-1 lg:px-5 lg:py-2 mt-16 text-sm lg:text-base">Customize <img alt="customize icon" src={customizeIcon} className="btnIcons" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header