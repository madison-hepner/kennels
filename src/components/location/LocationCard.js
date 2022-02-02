import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            {/* <img src={'/images/dog.svg'} alt="Dog Pic" /> */}
          {/* </picture> */} 
          <span className="card-locationname">
            {location.name}
          </span>
          <p>{location.address}</p>
        </div>
      </div>
    );
  }