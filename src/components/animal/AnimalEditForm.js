import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getAnimalById, updateAnimal} from "../../modules/AnimalManager"
import "./AnimalForm.css"
import { getAllCustomers } from "../../modules/CustomerManager";
import { getCustomerById } from "../../modules/CustomerManager";
import { LocationDetail } from "../location/LocationDetail";


export const AnimalEditForm = () => {

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }

    // useEffect(() => {
    //     getCustomers()
	// 	//load customer data and setState
	// }, []);

	const [customers, setCustomers] = useState([]);
    const [animal, setAnimal] = useState({ name: "", breed: "", customerId: "" });
    const [isLoading, setIsLoading] = useState(false);

    const {animalId} = useParams();
    const navigate = useNavigate();
    const customerId = animal.customerId
    // const locationId = animal.locationId

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);

    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: parseInt(animal.locationId),
      customerId: parseInt(animal.customerId)
    };

  updateAnimal(editedAnimal)
    .then(() => navigate("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomers(customer);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
          </div>

          <div className="formgrid">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleFieldChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(customer => (
							<option key={customer.id} value={customer.id}>
								{customer.name}
							</option>
						))}
					</select>
			</div>
          <div className="formgrid">
            <div className="date">
                  <label htmlFor="dateAdmitted">Date Admitted:</label>
                  <div className="dateAdmitted">{animal.name} was addmited on {animal.dateAdmitted}</div>
              </div>
              </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>

          </div>
        </fieldset>
      </form>
    </>
  );
}