import React from 'react'
import './Map.scss'
import ArrowButton from '../../ui/ArrowButton/ArrowButton'

import mapSvg from '../../../assets/map.svg'

function Map() {
    const scrollToMap = (e) => {
        e.preventDefault();
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <section className='map-section'>
        <div className="container">
            <div className="map-section__header">
                <div className="map-section__link-wrapper">
                    <h3>Go to the map to choose a location</h3>
                    <ArrowButton onClick={scrollToMap}/>
                </div>
                <div className="map-section__description">
                    <p>
                        By clicking on the markers, you can view detailed information about each 
                        building or monument, learn a bit about its history, and explore an interactive 
                        3D model that you can freely rotate and examine from every angle.
                    </p>
                </div>
            </div>

            <div id='map' className="map-section__visual">
                <div className="map-container">
                    <img src={mapSvg} alt="Map" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map