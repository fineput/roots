import React, { useState } from 'react'
import './Hero.scss'

import slider1 from '../../../assets/hero_slider1.svg'
import slider2 from '../../../assets/hero_slider2.svg'
import slider3 from '../../../assets/hero_slider3.svg'

const images = [slider1, slider2, slider3];


function Hero() {
    const [images, setImages] = useState([slider1, slider2, slider3]);

    const handleClick = (clickedIndex) => {
        if (clickedIndex !== 1) {
            const newOrder = [...images];

            if (clickedIndex === 0){
                const last = newOrder.pop();
                newOrder.unshift(last)
            } else if (clickedIndex === 2) {
                const first = newOrder.shift();
                newOrder.push(first)
            }

            setImages(newOrder);
        }
    }
  return (
    <section className='hero'>
        <div className="container">
            <h1 className='hero__title'>The roots of heritage run deep —<br></br> their strength lives on in us</h1>
           
           <div className="hero__slider">
                <div className="hero__cards">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`hero__card ${index === 1 ? 'hero__card--active' : ''}`}
                        >
                            <img src={img} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    </section>
  )
}

export default Hero