import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';



const Home = () => {
 // const { oid } = useParams();

  const navigate = useNavigate();
  //const [conferences, setConferences] = useState([]);
  const [device, setDevice] = useState([]); // creates the JSON objects. where we store the response


  useEffect(() => {
    const getDevice = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/getDevices`)
        setDevice(res.data);
      }
      catch(err) {
        console.error(err.message);
      }
    }
    //getConferences();
  }  , []);

  //useEffect(() => {
     // like a wrapper. use an asycn
     //const getOrganization = async () => {
      //try {
       //const res = await axios.get("http://localhost:8080/user/1")
        //setOrganization(res.data); // takes the response and places it in organization variable
      //}
     // catch(err) {
        //console.error(err.message);
     // }
   // }
   // getOrganization(); 
  //}, []);
  
  const handleClick = (did) => {
    navigate(`/meeting/${did}`)
  }
  const handleDelete = async (did) => {
    try {
      await axios.delete("http://localhost:8080/delete/" + did); //axios call to the backend
      window.location.reload(); //reloads the page
    }
    catch (err) {
      console.error(err.message); //log error
    }
  };

  return ( // return is like the body tag
    <div>
      <div>
        <meta charSet="utf-8" />
        <title>Device Proxy</title>
        <link rel="stylesheet" href="css/style.css" />
      </div>
      <Navbar />
        <section> 
        <div>
          <div id={device.did} className="container">
          <h>{device.dlocation}</h>
          <br />
          <h>{device.dip}, {device.dpisp}</h>
          </div>
        </div>
        </section>
        <section className="header">
          <h1>My Devices</h1>
          <p>Detecting Proxies</p>
        </section>
      <div>
        {device.map((device) => (
          <div >
            <h2 style={{ cursor: 'pointer' }} id={device.did} className="container" onClick={() => handleClick(device.did)}>{device.dlocation}</h2>
            <br />
            <br />
            <Link to={`/updateForm/${device.did}`}>
              <input type="submit" value="Update Meeting" />
            </Link>
            <button type="submit" onClick={()=>handleDelete(device.did)}>Delete Device</button>
          </div>
        ))}
        </div>
      </div>
  );
}
export default Home; 