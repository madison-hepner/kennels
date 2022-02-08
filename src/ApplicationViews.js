import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from './components/animal/AnimalList.js'
import { EmployeeList } from "./components/employee/EmployeeList.js"
import { LocationList } from "./components/location/LocationList.js"
import { CustomerList } from "./components/customer/CustomerList.js"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { LocationDetail } from "./components/location/LocationDetail"
import { AnimalForm } from './components/animal/AnimalForm'


export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}

                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/animals" element={<AnimalList />} />
                
                <Route path="/animals/:animalId" element={<AnimalDetail />} />


                {/*
                    This is a new route to handle a URL with the following pattern:
                    http://localhost:3000/animals/1

                    It will not handle the following URL because the `(\d+)`
                    matches only numbers after the final slash in the URL
                    http://localhost:3000/animals/jack
                */}


                <Route path="/employees" element={<EmployeeList />} />

                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />

                <Route path="/customers" element={<CustomerList />} />

                <Route path="/animals/create" element={<AnimalForm />} />
            </Routes>
        </>
    )
}