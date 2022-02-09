import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./components/auth/Login.js"
import { Register } from "./components/auth/Register.js"
import { AnimalList } from './components/animal/AnimalList.js'
import { EmployeeList } from "./components/employee/EmployeeList.js"
import { LocationList } from "./components/location/LocationList.js"
import { CustomerList } from "./components/customer/CustomerList.js"
import { AnimalDetail } from "./components/animal/AnimalDetail"
import { LocationDetail } from "./components/location/LocationDetail"
import { AnimalForm } from './components/animal/AnimalForm'
import { EmployeeDetail } from "./components/employee/EmployeeDetail.js"
import { EmployeeForm } from "./components/employee/EmployeeForm"
import { CustomerDetail } from "./components/customer/CustomerDetail"
import { CustomerForm } from "./components/customer/CustomerForm"
import { useNavigate } from "react-router-dom"




export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const Navigate = useNavigate();

    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    return (
        <>
            <Routes>
            <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
            <Route exact path="/register" element={<Register />} />



            
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


                <Route exact path="/employees" element={<EmployeeList />} />
                <Route path="/employees/:employeeId" element={<EmployeeDetail />} />


                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:locationId" element={<LocationDetail />} />


                <Route exact path="/customers" element={<CustomerList />} />
                <Route path="/customers/:customerId" element={<CustomerDetail />} />


                <Route path="/animals/create" element={<AnimalForm />} />

                <Route path="/employees/create" element={<EmployeeForm />} />
                
                <Route path="/customers/create" element={<CustomerForm />} />

            </Routes>
        </>
    )
}