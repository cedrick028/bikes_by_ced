import React from 'react'

import gravelBikeImg from '../assets/bikes/bike_6.png'

const GravelBike = () => {
  return (
    <div className="container m-auto px-6 flex flex-col justify-center mt-20">
        <h2 className="text-sm md:text-base lg:text-xl text-center font-bold">Gravel Bikes</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-2 lg:mt-5">ADVENTURE BEGINS HERE</h1>
        <p className="text-center mt-10 lg:mt-20 text-sm lg:text-base">Gravel bikes can be ridden from chunky cobble roads to the wild dirt far beyond the beaten path. Adventure-ready features like clearance for wider tires, mounts for bags and cages, and comfortable geometry let these bikes adapt to everything from rough roads to distant singletrack. Whether you’re in it to explore what’s just outside of town, bikepack far into the beyond, or set your sights on the most challenging gravel races, these bikes have what it takes to get you there.</p>

        <div className="max-w-6xl m-auto mt-6 lg:mt-14 mt-">
            <img alt="Trek gravel bike" src={gravelBikeImg} />
        </div>
        
        <p className="text-xl lg:text-3xl font-bold text-center">Checkpoint SLR 6 AXS</p>
    </div>
  )
}

export default GravelBike