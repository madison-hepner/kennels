import React from "react";
import { PropsAndState } from './components/PropsAndState'
import "./Home.css"

export const Home = () => (
    <>
        <div className="card">
        <h2>Nashville Kennels</h2>
        <small class="saying">Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Madison"} />
        </div>
    </>

)