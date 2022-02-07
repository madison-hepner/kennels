import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { EmployeeList } from "./components/employee/EmployeeList.js"
import { LocationList } from "./components/location/LocationList.js"
import { CustomerList } from "./components/customer/CustomerList.js"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}

                <Route path="/animals" element={<AnimalList />} />

                <Route path="/employees" element={<EmployeeList />} />

                <Route path="/locations" element={<LocationList />} />

                <Route path="/customers" element={<CustomerList />} />
            </Routes>
        </>
    )
}