import React from 'react';
import "./Animal.css";
import { Link } from "react-router-dom";

export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img className="kennellogo" src={'https://image.freepik.com/free-vector/cute-corgi-puppy-cartoon-icon_42750-299.jpg?w=1060'} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {animal.name}
        </span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>

        <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>

        <Link to={`/animals/${animal.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}







