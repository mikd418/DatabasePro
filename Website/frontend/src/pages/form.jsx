import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';
//import { Link } from 'react-router-dom';


const Form = () => {
  const [newForm, setNewForm] = useState({
    dlocation : "",
    dip : "",
    dcdistance : "",
    dpdistance : "",
    dcisp : "",
    dpisp : "",
    dsisp : "",
    // hname : "default_needs_change",
    did: "1"
  });
  const handleSubmit = async (e) => {
    
    try {
        await axios.post("http://localhost:8080/api/form", newForm); //this is the backend endpoint
        setNewForm({ 
          dlocation : "",
          dip : "",
          dcdistance : "",
          dpdistance : "",
          dcisp : "",
          dpisp : "",
          dsisp : "",
          // hname : "default_needs_change",
          did: "1"
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'budget' && e.target.value === '') {
      setNewForm(prev => ({...prev, [e.target.name]: 0}));
    } else {
    setNewForm(prev => ({...prev, [e.target.name]: e.target.value})); //set the state to the value of the input
    }
  };

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Device Proxy</title>
            <Navbar />

            <link rel="stylesheet" href="css/style.css" />
            <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="dlocation">Device Location</label>
                <input type="text" id="dlocation" name="dlocation" placeholder="Device Location" onChange={handleChange} />
                <label htmlFor="dip">Device IP Address</label>
                <input type="text" id="dip" name="dip" placeholder="Start Device IP" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="dcdistance">Distance to Client</label>
                <input type="number" id="dcdistance" name="dcdistance" placeholder="Distance to Client in km" step="0.01" onChange={handleChange} />
                <label htmlFor="dpdistance">Distance to Proxy</label>
                <input type="number" id="dpdistance" name="dpdistance" placeholder="Distance to Proxy in km" step="0.01" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="dcisp">Client ISP</label>
                <input type="text" id="dcisp" name="dcisp" placeholder="Client ISP" onChange={handleChange} />
                <label htmlFor="dpisp">Proxy ISP</label>
                <input type="text" id="dpisp" name="dpisp" placeholder="Proxy ISP" onChange={handleChange} />
                <label htmlFor="dsisp">Server ISP</label>
                <input type="text" id="dsisp" name="dsisp" placeholder="Server ISP" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
    );
}

export default Form; 