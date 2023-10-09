import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';


const Hotel = () => {
  const [hotelForm, setNewForm] = useState({
    HMaxMeetSize : "",
    Hname : "",
    HState : "",
    HZip : "",
    HAddress : "",
    HContactPhone : "",
    HPhone : "",
    HCity : "",
  });
  const handleSubmit = async (e) => {
    try {
        await axios.post("http://localhost:8080/api/hotel", hotelForm); //this is the backend endpoint
        setNewForm({ 
            HMaxMeetSize : "",
            Hname : "",
            HState : "",
            HZip : "",
            HAddress : "",
            HContactPhone : "",
            HPhone : "",
            HCity : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };

  const handleChange = (e) => {
    setNewForm(prev => ({...prev, [e.target.name]: e.target.value})); //set the state to the value of the input
  }

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Meeting Makers</title>
            <Navbar />
            <link rel="stylesheet" href="css/style.css" />
            <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="HName">Hotel Name</label>
                <input type="text" id="HName" name="HName" placeholder="Hotel name" onChange={handleChange} />
                <label htmlFor="HMaxMeetSize">Hotel Max Meeting Size</label>
                <input type="text" id="HMaxMeetSize" name="HMaxMeetSize" placeholder="Hotel Max Meeting Size" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="HState">Hotel State</label>
                <input type="text" id="HState" name="HState" placeholder="Hotel State"  onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="HCity">Hotel City</label>
                <input type="text" id="HCity" name="HCity" placeholder="Hotel City" onChange={handleChange} />
                <label htmlFor="HAddress">Hotel Address</label>
                <input type="text" id="HAddress" name="HAddress" placeholder="Hotel Address" onChange={handleChange} />
                <label htmlFor="HZip">Hotel Zip Code</label>
                <input type="text" id="HZip" name="HZip" placeholder="Hotel Zip Code" onChange={handleChange} />
                <label htmlFor="HNumRooms">Hotel Number of Rooms</label>
                <input type="number" id="HNumRooms" name="HNumRooms" placeholder="Hotel Number of Rooms" onChange={handleChange} />
                <label htmlFor="HPhone">Hotel Phone Number</label>
                <input type="text" id="HPhone" name="HPhone" placeholder="Hotel Phone" onChange={handleChange} />
                <label htmlFor="HContactPhone">Hotel Representative Contact Phone</label>
                <input type="text" id="HContactPhone" name="HContactPhone" placeholder="Hotel Contact Phone" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
}

export default Hotel;