import React from "react";
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
//import '../style.css';

const Login = () => {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Meeting Makers</title>
          <Navbar />
          <link rel="stylesheet" href="css/style.css" />
          <div className="container">
            <form>
              <label class=".formatty" htmlFor="uname">Organization Name</label>
              <input type="text" id="uname" name="uname" placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" />
              <Link to="/userHome"><input type="submit" value="Login" /></Link>
              <Link to="/register"><input type="submit" value="Register" /></Link>
            </form>
          </div>  
        </div>
      );
    }

  export default Login;