import React from 'react'

import electricBikeImg from '../assets/bikes/bike_7.png'
import discoverIcon from '../assets/icons/discover_icon.png'

const ElectricBike = () => {
  return (
    <div className="container m-auto px-6 flex flex-col justify-center mt-20">
        <h2 className="text-sm md:text-base lg:text-xl text-center font-bold">Allant+</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-2 lg:mt-5">POWERED BY BOSCH</h1>
        <p className="text-center mt-10 lg:mt-20 text-sm lg:text-base">Allant+ is a powerful, versatile, and capable electric bike perfect for speedy commutes, sweat-free errands, and off-road adventures. Electrify your everyday with its hill-flattening boost, distance-shrinking range, and high-end suspension fork that turns potholes into not-holes.</p>
        <div className="m-auto mt-10 lg:mt-20">
            <button className="text-black flex items-center gap-3 lg:gap-4 border-2 border-black rounded-lg lg:rounded-xl px-4 py-1 lg:px-5 lg:py-2 text-sm lg:text-base">Discover <img alt="customize icon" src={discoverIcon} className="btnIcons" /></button>
        </div>

        <div className="max-w-6xl m-auto mt-20">
            <img alt="Trek gravel bike" src={electricBikeImg} />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-20 m-auto gap-8 md:gap-14 lg:gap-20 flex-wrap sm:flex-nowrap">
            <ElectricBikeSpecs electricHeaderSpecs="2h" electricSpecs="Charge time" />
            <ElectricBikeSpecs electricHeaderSpecs="624Wh" electricSpecs="Battery" />
            <ElectricBikeSpecs electricHeaderSpecs="28Mph" electricSpecs="Assist" />
            <ElectricBikeSpecs electricHeaderSpecs="100km/h" electricSpecs="Max speed" />
        </div>
    </div>
  )
}

const ElectricBikeSpecs = (props) => {
    return(
        <div className="flex flex-row-reverse md:flex-col items-center gap-20 md:gap-0 justify-between md:justify-start">
            <h1 className="text-2xl lg:text-5xl font-medium">{props.electricHeaderSpecs}</h1>
            <p className="text-sm lg:text-base md:mt-5 md:text-center">{props.electricSpecs}</p>
        </div>
    )
}

export default ElectricBike