import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getEmployeeById, updateEmployee} from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
import { getAllLocations } from "../../modules/LocationManager";
import { getAllEmployees } from '../../modules/EmployeeManager';



export const EmployeeEditForm = () => {
  const [employee, setEmployee] = useState({ name: "", locationId: "",});
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return getAllLocations().then(locationsFromAPI => {
        setLocations(locationsFromAPI)
    })}

    useEffect(() => {
        getLocations()
		//load location data and setState
	}, []);

  const {employeeId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: employeeId,
      name: employee.name,
      locationId: parseInt(employee.locationId)
      
    };

  updateEmployee(editedEmployee)
    .then(() => navigate("/employees")
    )
  }

  useEffect(() => {
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
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
              value={employee.name}
            />
            <label htmlFor="name">Employee Name:</label>
            </div>


			<div className="formgrid">
				<label htmlFor="location">Change Employee Location: </label>
				<select value={employee.locationId} name="locationId" id="locationId" onChange={handleFieldChange} className="form-control" >
					<option value="0">Select a location</option>
					    {locations.map(location => (
						<option key={location.id} value={location.id}>
							{location.name}
					</option>
					))}
					</select>
				</div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}