import React from "react"
import "./Employee.css"

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
          <p>Works at: {employee.workplace}</p>
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Remove Employee</button>
        </div>
      </div>
    );
  }