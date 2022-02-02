import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { EmployeeCard } from "./components/employee/EmployeeCard.js"
import { LocationCard } from "./components/location/LocationCard.js"
import { CustomerCard } from "./components/customer/CustomerCard.js"


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}

                <Route path="/animals" element={<AnimalList />} />

                <Route path="/employees" element={<EmployeeCard />} />

                <Route path="/locations" element={<LocationCard />} />

                <Route path="/customers" element={<CustomerCard />} />
            </Routes>
        </>
    )
}