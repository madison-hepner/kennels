import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

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

          <Link to={`/locations/${location.id}`}>
        <button>Details</button>
        </Link>

        <Link to={`/locations/${location.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }