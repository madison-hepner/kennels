import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../../modules/EmployeeManager';
import './EmployeeForm.css'
import { getAllLocations } from '../../modules/LocationManager';
import { getAllCustomers } from '../../modules/CustomerManager';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { addEmployee } from '../../modules/EmployeeManager';

export const EmployeeForm = () => {
	// State will contain both employee data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [employee, setEmployee] = useState({
		id: "",
		name: "",
		locationId: 0,
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [employees, setEmployees] = useState([]);
	const [locations, setLocations] = useState([]);
	// const [customers, setCustomers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEmployee = { ...employee}
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* employee is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

        const getEmployees = () => {
            return getAllEmployees().then(employeesFromAPI => {
                setEmployees(employeesFromAPI)
            })
        }

		const getLocations = () => {
            return getAllLocations().then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            })
        }

    useEffect(() => {
        getEmployees()
		//load location data and setState
	}, []);

	useEffect(() => {
        getLocations()
		//load location data and setState
	}, []);

    //  useEffect(() => {
    //     getCustomers()
	// 	//load customer data and setState
	// }, []);


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const employeeId = employee.id
		const locationId = employee.locationId

		if (employeeId === 0 || locationId === 0) {
			window.alert("Please select a location and a customer")
		} else {
			//invoke addemployee passing employee as an argument.
			//once complete, change the url and display the employee list
			addEmployee(employee)
				.then(() => navigate("/employees"))
		}
	}

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">employee name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value={employee.name} />
				</div>
			</fieldset>
			{/* <fieldset>
				<div className="form-group">
					<label htmlFor="address">employee location:</label>
					<input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee address" value={employee.workplace} />
				</div>
			</fieldset> */}
			<fieldset>
			<div className="form-group">
					<label htmlFor="location">Select Employee Location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(location => (
							<option key={location.id} value={location.id}>
								{location.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			{/* <fieldset> */}
				{/* <div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
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
					<select value={employee.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a customer</option>
						{customers.map(customer => (
							<option key={customer.id} value={customer.id}>
								{customer.name}
							</option>
						))}
					</select>
				</div>
			</fieldset> */}
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Add Employee
          </button>
		</form>
	)
};