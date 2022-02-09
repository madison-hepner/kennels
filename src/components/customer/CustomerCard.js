import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom";


export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            {/* <img src={'/images/dog.svg'} alt="Dog Pic" /> */}
          {/* </picture> */} 
          <h3><span className="card-customername">
            {customer.name}
          </span></h3>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove Customer</button>

          <Link to={`/customers/${customer.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }