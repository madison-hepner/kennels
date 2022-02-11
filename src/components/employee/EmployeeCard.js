import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            {/* <img src={'/images/dog.svg'} alt="Dog Pic" /> */}
          {/* </picture> */} 
          <h3><span className="card-employeename">
            {employee.name}
          </span></h3>
          <p>Works at: {employee.location?.name}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove Employee</button>
          <Link to={`/employees/${employee.id}`}>
            <button>Details</button>
          </Link>

          <Link to={`/employees/${employee.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }