import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            {/* <img src={'/images/dog.svg'} alt="Dog Pic" /> */}
          {/* </picture> */} 
          <h3><span className="card-customername">
            {customer.name}
          </span></h3>
          <p>{customer.breed}</p>
        </div>
      </div>
    );
  }