import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCustomer } from '../../modules/CustomerManager';
import './CustomerForm.css'
import { getAllCustomers } from '../../modules/CustomerManager';
import { addCustomer } from '../../modules/CustomerManager';

export const CustomerForm = () => {
	// State will contain both customer data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [customer, setCustomer] = useState({
		id: "",
		name: "",
		address: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [customers, setCustomers] = useState([]);

	// const [customers, setCustomers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newCustomer = { ...customer}
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newCustomer[event.target.id] = selectedVal
		// update state
		setCustomer(newCustomer)
	}

        const getCustomers = () => {
            return getAllCustomers().then(customersFromAPI => {
                setCustomers(customersFromAPI)
            })
        }

    useEffect(() => {
        getCustomers()
		//load location data and setState
	}, []);

	// useEffect(() => {
    //     getLocations()
	// 	//load location data and setState
	// }, []);

    //  useEffect(() => {
    //     getCustomers()
	// 	//load customer data and setState
	// }, []);


	const handleClickSaveCustomer = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const customerId = customer.id
		// const locationId = customer.locationId

		if (customerId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addcustomer passing customer as an argument.
			//once complete, change the url and display the customer list
			addCustomer(customer)
				.then(() => navigate("/customers"))
		}
	}

	return (
		<form className="customerForm">
			<h2 className="customerForm__title">New Customer</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Customer Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer name" value={customer.name} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="address">Customer Address:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer address" value={customer.address} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Add customer
          </button>
		</form>
	)
};