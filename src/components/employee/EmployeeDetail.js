import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getEmployeeById } from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";
import "./Employee.css"
import { deleteEmployee } from "../../modules/EmployeeManager";

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {employeeId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getemployeeById(id) from employeeManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee(employee);
        setIsLoading(false);
      });
  }, [employeeId]);

  const handleDelete = () => {
    //invoke the delete function in employeeManger and re-direct to the employee list.
    setIsLoading(true);
    deleteEmployee(employeeId).then(() =>
      navigate("/employees")
    );
  };

  return (
    <section className="card">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Address: {employee.location?.address}</div>
      <div className="employee__workplace">Works at: {employee.location?.name}</div>
      {/* What's up with the question mark???? See below.*/}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Add Employee
        </button>
      
    </section>
  );
};