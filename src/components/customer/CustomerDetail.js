import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getCustomerById } from "../../modules/CustomerManager";
import "./CustomerDetail.css";
import "./Customer.css"
import { deleteCustomer } from "../../modules/CustomerManager";

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", email: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {customerId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, [customerId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteCustomer(customerId).then(() =>
      navigate("/customers")
    );
  };

  return (
    <section className="card">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">address: {customer.address}</div>
      <div className="customer__email">email: {customer.email}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="customer__location">Customer Of: {customer.location?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );
};