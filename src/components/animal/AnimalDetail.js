import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import "./Animal.css"
import { deleteAnimal } from "../../modules/AnimalManager";

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { animalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteAnimal(animalId).then(() =>
      navigate("/animals")
    );
  };

  return (
    <section className="card">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
      </button>
    </section>
  );
};




