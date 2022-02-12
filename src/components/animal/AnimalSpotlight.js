import React, { useState, useEffect } from "react";
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalSpotlight.css";


export const AnimalSpotlight = ({animalId}) => {
    useEffect(() => {
        getAnimalById(animalId).then(animal => {
          setAnimal(animal);
        });
      }, [animalId]);
      
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    getAnimalById(animalId).then(animal => {
      setAnimal(animal);
    });
  }, []);

  return (
    <div className="animal-spotlight">
      <img className="kennellogo" src='https://image.freepik.com/free-vector/cute-corgi-puppy-cartoon-icon_42750-299.jpg?w=1060' alt="My Dog" />
      <div>
        <h3>{animal.name}</h3>
        <p>{animal.breed}</p>
      </div>
    </div>
  );
};
