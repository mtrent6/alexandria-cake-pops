import React from 'react'
import Carousel from 'react-images'

const images = [{ source: '../../assets/cake_pops.svg' }, { source: '../../assets/cake_pops.webp' }]

export const Home = () => {
    return <Carousel views={images} /> //this doesnt work
    //think i want this
    // https://reactjsexample.com/3d-cover-flow-in-react/
  
}