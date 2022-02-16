import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addAnimal } from '../../modules/AnimalManager';
import './AnimalForm.css'
import { getAllLocations } from '../../modules/LocationManager';
import { getAllCustomers } from '../../modules/CustomerManager';
import Calendar from "react-select-date";




export const AnimalForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [animal, setAnimal] = useState({
		name: "",
		breed: "",
		locationId: 0,
		customerId: 0,
		dateAdmitted: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [locations, setLocations] = useState([]);
	const [customers, setCustomers] = useState([]);
	const [value, onChange] = useState(new Date());

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newAnimal = { ...animal }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newAnimal[event.target.id] = selectedVal
		// update state
		setAnimal(newAnimal)
	}



        const getLocations = () => {
            return getAllLocations().then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            })
        }

        const getCustomers = () => {
            return getAllCustomers().then(customersFromAPI => {
                setCustomers(customersFromAPI)
            })
        }

		const current = new Date();
		const dateAdmitted = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`

    useEffect(() => {
        getLocations()
		//load location data and setState
	}, []);

     useEffect(() => {
        getCustomers()
		//load customer data and setState
	}, []);

	useEffect(() => {
		const copy = {...animal}
		copy.dateAdmitted = dateAdmitted
		setAnimal(copy)
	},[])

	const handleClickSaveAnimal = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const locationId = animal.locationId
		const customerId = animal.customerId

		if (locationId === 0 || customerId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
			addAnimal(animal)
				.then(() => navigate("/animals"))
		}
	}


	return (
		<form className="animalForm">
			<h2 className="animalForm__title">New Animal</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Animal name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed:</label>
					<input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(location => (
							<option key={location.id} value={location.id}>
								{location.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Customer: </label>
					<select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(customer => (
							<option key={customer.id} value={customer.id}>
								{customer.name}
							</option>
						))}
					</select>

				</div>
			</fieldset>
			<fieldset>
			<div>
				<div className="dateAdmitted">Date to be Admitted: {dateAdmitted} (today's date)</div>
    		</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveAnimal}>
				Save Animal
          </button>
		</form>
	)
};


