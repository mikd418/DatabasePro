import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Update = () => {
  const { did } = useParams(); // Extract conferenceId from URL
  const [newForm, setNewForm] = useState({
    dlocation : ""
  });

  const handleSubmit = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updateLocation/${did}`, newForm);
        setNewForm({ 
          dlocation : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit2 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updateCISP/${did}`, newForm);
        setNewForm({ 
          dcisp : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit3 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updatePISP/${did}`, newForm);
        setNewForm({ 
          dpisp : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit4 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updateSISP/${did}`, newForm);
        setNewForm({ 
          dsisp : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit5 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updateIP/${did}`, newForm);
        setNewForm({ 
          dip : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit6 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updatePDistance/${did}`, newForm);
        setNewForm({ 
          dpdistance : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleSubmit7 = async (e) => {
    
    try {
      await axios.put(`http://localhost:8080/updateCDistance/${did}`, newForm);
        setNewForm({ 
          dcdistance : ""
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'dip' && e.target.value === '') {
      setNewForm(prev => ({...prev, [e.target.name]: 0}));
    } else {
    setNewForm(prev => ({...prev, [e.target.name]: e.target.value})); //set the state to the value of the input
  }
};

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Proxy Detection</title>
            <Navbar />
            <link rel="stylesheet" href="../css/style.css" />
            {/* <link rel="stylesheet" href="css/style.css" /> */}
            <div className="container">

            <form onSubmit={handleSubmit}>
              <label htmlFor="cname">Conference Name</label>
              <input type="text" id="cname" name="cname" placeholder="Conference name" onChange={handleChange} />
              <input type="submit" value="Update Name" />
            </form>

            <br />
            <br />

            <form onSubmit={handleSubmit2}>
              <label htmlFor="cstart">Conference Start Date</label>
              <input type="date" id="cstartdate" name="cstartdate" placeholder="Start Date" dateFormat="yyyy-mm-dd" onChange={handleChange} />
              <input type="submit" value="Update Start Date" />
            </form>

            <br />
            <br />

            <form onSubmit={handleSubmit3}>
              <label htmlFor="cend">Conference End Date</label>
              <input type="date" id="cenddate" name="cenddate" placeholder="End Date" dateFormat="yyyy-mm-dd" onChange={handleChange} />
              <input type="submit" value="Update End Date" />
            </form>
                
            <br />
            <br />

            <form onSubmit={handleSubmit4}>
              <label htmlFor="ccity">Conference City</label>
              <input type="text" id="ccity" name="ccity" placeholder="Conference City" onChange={handleChange} />
              <input type="submit" value="Update City" />
            </form>
                
            <br />
            <br />

            <form onSubmit={handleSubmit5}>
              <label htmlFor="cfee">Fee</label>
              <input type="text" id="cfee" name="cfee" placeholder="Conference Attendance Fee" onChange={handleChange} />
              <input type="submit" value="Update Fee" />
            </form>
                
            <br />
            <br />

            <form onSubmit={handleSubmit6}>
              <label htmlFor="cattendance">Conference Attendance</label>
              <input type="text" id="cattendance" name="cattendance" placeholder="Estimated Conference Attendance" onChange={handleChange} />
              <input type="submit" value="Update Attendance" />
            </form>
                
            <br />
            <br />
                
            <form onSubmit={handleSubmit7}>
              <label htmlFor="budget">Proposed Budget</label>
              <input type="number" id="cbudget" name="cbudget" placeholder="Proposed Budget" step="0.01" onChange={handleChange} />
              <input type="submit" value="Update Budget" />
            </form>  
            
          </div>
        </div>
    );
}

export default Update; 