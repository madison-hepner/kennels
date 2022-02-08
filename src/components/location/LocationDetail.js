import React, { useState, useEffect } from 'react';
import { deleteLocation, getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(locationArray => {
        setLocation(locationArray);
        setIsLoading(false)
      });
  }, [locationId]);

  const handleDelete = () => {
      setIsLoading(true)
      deleteLocation(locationId).then(() => 
      navigate("/locations")
      )
  }

  return (
    <section className="card">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove Location
        </button>
    </section>
  );
}