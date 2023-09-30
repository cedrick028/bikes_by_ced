import React from 'react'

import roadBikeImg1 from '../assets/bikes/bike_3.png'
import roadBikeImg2 from '../assets/bikes/bike_4.png'
import roadBikeImg3 from '../assets/bikes/bike_5.png'

const RoadBike = () => {
  return (
    <div className="container m-auto px-6 flex flex-col justify-center mt-20">
        <h2 className="text-sm md:text-base lg:text-xl text-center font-bold">Madone</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-2 lg:mt-5">EXPLORE YOUR RIDE</h1>
        <p className="text-center mt-10 lg:mt-20 text-sm lg:text-base">From a legacy of greatness comes a new standard of speed. Seven generations in the making, Madone SLR is our fastest and lightest Madone disc ever, pushing the boundaries of what’s possible with a triple threat of unprecedented aerodynamics, exceptional ride quality, and lightweight design. This race-ready bike is complete with never-before-seen IsoFlow technology that gives you every advantage in speed and handling.</p>

        <div className="flex justify-center lg:justify-between mt-10 lg:mt-20 gap-10 flex-wrap xl:flex-nowrap">
            <RoadBikeCards rb_image={roadBikeImg1} rb_name="Madone SLR 9 Gen 7" rb_description="Madone SLR 9 is ultralight, insanely fast, and super smooth. It’s the ride you reach for on race day when every watt counts and your eyes are on the top step." />
            <RoadBikeCards rb_image={roadBikeImg2} rb_name="Madone SLR 9 AXS Gen 7" rb_description="Madone SLR 9 AXS is ultralight, insanely fast, and super smooth." />
            <RoadBikeCards rb_image={roadBikeImg3} rb_name="Madone SLR 7 AXS Gen 7" rb_description="Madone SLR 7 is the ultimate race machine. An 800 Series OCLV Carbon frame with exclusive IsoFlow technology adds an aerodynamic advantage, cuts weight, and smooths the road ahead." />
        </div>
    </div>
  )
}

const RoadBikeCards = (props) => {
    return(
        <div className="max-w-md mt-8 xl:mt-0 mt-">
            <div>
                <img alt="Trek madone roadbike" src={props.rb_image} className="object-cover" />
            </div>
            <p className="text-xl lg:text-3xl font-bold mt-5 text-center lg:text-start">{props.rb_name}</p>
            <p className="text-sm lg:text-base mt-5 max-w-md text-center lg:text-start">{props.rb_description}</p>
        </div>
    )
}

export default RoadBike