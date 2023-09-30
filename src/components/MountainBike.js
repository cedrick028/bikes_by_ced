import React from 'react'

import mountainBikeImg1 from '../assets/bikes/bike_1.png'
import mountainBikeImg2 from '../assets/bikes/bike_2.png'
import ratingsIcon from '../assets/icons/ratings_icon.png'

const MountainBike = () => {
  return (
    <div className="container m-auto px-6 flex flex-col justify-center mt-20">
        <h2 className="text-sm md:text-base lg:text-xl text-center font-bold tex">Supercaliber</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-2 lg:mt-5">NOTHING ELSE LIKE IT</h1>
        <p className="text-center mt-10 lg:mt-20 text-sm lg:text-base">Supercaliber is a game-changing cross country mountain bike that’s fast, light, and smooth through the rough stuff. Hardtails are efficient, full suspension bikes keep you in control, but only Supercaliber pairs the best parts of both.</p>

        <div className="flex justify-between mt-10 lg:mt-20 gap-10 flex-wrap md:flex-nowrap">
            <MountainBikeCards mtb_image={mountainBikeImg1} mtb_name="Supercaliber 9.9 XTR" mtb_description="Supercaliber 9.9 is the fastest, lightest, and most capable cross country race bike we make—and that’s exactly why it’s Trek Factory Racing’s World Cup bike of choice." />
            <MountainBikeCards mtb_image={mountainBikeImg2} mtb_name="Supercaliber 9.9 XX1 AXS" mtb_description="Supercaliber 9.9 XX1 AXS is the fastest, lightest, and most capable cross country race bike we make." />
        </div>
    </div>
  )
}

const MountainBikeCards = (props) => {
    return(
        <div className="max-w-2xl mt-8 md:mt-0">
            <div className="m-auto">
                <img alt="Trek supercaliber mountainbike" src={props.mtb_image} className="object-cover" />
            </div>
            <p className="text-xl lg:text-3xl font-bold mt-5 text-center md:text-start">{props.mtb_name}</p>
            <div className="flex gap-1 mt-5 justify-center md:justify-start">
                <img alt="Star rating" src={ratingsIcon} className="ratingsImg" />
                <img alt="Star rating" src={ratingsIcon} className="ratingsImg" />
                <img alt="Star rating" src={ratingsIcon} className="ratingsImg" />
                <img alt="Star rating" src={ratingsIcon} className="ratingsImg" />
                <img alt="Star rating" src={ratingsIcon} className="ratingsImg" />
            </div>
            <p className="text-xs lg:text-sm mt-1 text-center md:text-start">100+ reviews</p>
            <p className="text-sm lg:text-base mt-5 max-w-2xl text-center md:text-start">{props.mtb_description}</p>
        </div>
    )
}

export default MountainBike