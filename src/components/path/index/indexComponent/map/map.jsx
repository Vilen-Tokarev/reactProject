import React from "react";
import Frame from './mapComponents/frame.jsx'
import './map.scss'

function Map() {
    return(
        <section id="map" className="map">
        <div className="container">
          <p className="map__title">Карта судака</p>
          <div className="map__map-img">
            <Frame />
          </div>
        </div>
      </section>
    )
}


export default Map;