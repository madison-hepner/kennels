import React from "react"
import "./Location.css"

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            {/* <img src={'/images/dog.svg'} alt="Dog Pic" /> */}
          {/* </picture> */} 
          <span className="card-location">
            <h3>{location.name}</h3>
          </span>
          <p>{location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Remove Location</button>
        </div>
      </div>
    );
  }