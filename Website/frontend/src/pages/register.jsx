import React from "react";
import Navbar from '../components/Navbar';
//import { Link } from 'react-router-dom';
//import '../style.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
   
    const [registerForm, setRegisterForm] = useState({
        oname : "",
        oaddress: "",
        ocity: "",
        ostate : "",
        ozip : "",
        oemail : "",
        ophone : "",
        oid : "5"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/register", registerForm);
            setRegisterForm({
                oname : "",
                oaddress: "",
                ocity: "",
                ostate : "",
                ozip : "",
                oemail : "",
                ophone : "",
                oid : "5"
            });
        navigate('/userHome');
        } catch(err) {
            console.error(err.message);
        }
    };

    const handleChange = (e) => {
        setRegisterForm(prev => ({...prev, [e.target.name]: e.target.value}));
    }

      return (
        <div>
          <meta charSet="utf-8" />        
          <title>Welcome to Meeting Makers!</title>
          <Navbar />

          <link rel="stylesheet" href="css/style.css" />
          <div className="container">
            <form onSubmit={handleSubmit}>
              {/* Organization inputs*/}
            <label class=".formatty" htmlFor="uname">Company Name</label>
            <input type="text" id="uname" name="oname" placeholder="Email"  onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <label htmlFor="oaddress">Company Address</label>
            <input type="text" id="oaddress" name="oaddress" placeholder="Company street address" onChange={handleChange} />
            <label htmlFor="ocity">City</label>
            <input type="text" id="ocity" name="ocity" placeholder="City" onChange={handleChange} />
            <label htmlFor="ostate">State</label>
            <input type="text" id="ostate" name="ostate" placeholder="State" onChange={handleChange}/>
            <label htmlFor="ozip">Zipcode</label>
            <input type="text" id="ozip" name="ozip" placeholder="Zipcode" onChange={handleChange} />
            <label htmlFor="oemail">Email</label>
            <input type="text" id="oemail" name="oemail" placeholder="Contact Email" onChange={handleChange} />
            <label htmlFor="ophone">Phone</label>
            <input type="text" id="ophone" name="ophone" placeholder="Contact Phone number" onChange={handleChange} />
            <input type="submit" value="Finish Registering" />
            </form>
          </div>  
        </div>
      );
    }

  export default Register;