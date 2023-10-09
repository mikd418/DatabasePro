import Navbar from '../components/Navbar';
//import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Meeting = () => {
    const { cid } = useParams();
    const [meeting, setMeeting] = useState([]);
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        const getMeeting = async () => {
          try {
            const res = await axios.get(`http://localhost:8080/getConference/${cid}`)
            setMeeting(res.data);
          }
          catch(err) {
            console.error(err.message);
          }
        }
        getMeeting();
      });

    useEffect(() => {
        const getAttendees = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/getAttendee/${cid}`)
                setAttendees(res.data);
            }
            catch(err) {
                console.error(err.message);
            }
        }
        getAttendees();
    })

    const [newForm, setNewForm] = useState({
        aname : "",
        aphone : "",
        adiscount : "",
        aid : "",
        aemail : "",
        afeepaid : "",
        hname : "default_needs_change",
        cid: "1"
        });

      const handleSubmit = async (e) => {
        
        try {
            await axios.post("http://localhost:8080/api/attendees", newForm); //this is the backend endpoint
            setNewForm({ 
                aname : "",
                aphone : "",
                adiscount : "",
                aid : "",
                aemail : "",
                afeepaid : "",
                hname : "default_needs_change",
                cid: "1"
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
             <link rel="stylesheet" href="../css/style.css" />
  
          <Navbar />
          <section>
            <h id={meeting.cid} className="container">{meeting.cname}</h>
            <p>{meeting.hname}, {meeting.haddress},{meeting.hstate}, {meeting.hcity}, {meeting.hzip}</p>
            <p>{meeting.cstartdate} to {meeting.cenddate}</p>
            </section>
            <section> 
                <h>Attendees</h>
                {attendees.map((attendee) => (
                    <div>{attendee.aname}, {attendee.aemail}, {attendee.aphone}</div>
                ))}
            </section>
            <br />
            <br />
            {/* <Link to={`/updateForm/${conference.cid}`}>
              <input type="submit" value="Update Meeting" />
            </Link>
            <button type="submit" onClick={()=>handleDelete(conference.cid)}>Delete Meeting</button> */}
            {/* <link rel="stylesheet" href="css/style.css" /> */}
            <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="aname">Attendee Name</label>
                <input type="text" id="aname" name="aname" placeholder="Attendee name" onChange={handleChange} />
                <label htmlFor="aphone">Attendee Phone</label>
                <input type="text" id="aphone" name="aphone" placeholder="Attendee phone" onChange={handleChange} />
                <label htmlFor="adiscount">Attendee Discount</label>
                <input type="text" id="adiscount" name="adiscount" placeholder="Attendee discount" onChange={handleChange} />
                <label htmlFor="aid">Attendee ID</label>
                <input type="text" id="aid" name="aid" placeholder="Attendee ID" onChange={handleChange} />
                <label htmlFor="aemail">Atendee Email</label>
                <input type="text" id="aemail" name="aemail" placeholder="Attendee email" onChange={handleChange} />
                <label htmlFor="afeepaid">Fee Paid?</label>
                <input type="text" id="afeepaid" name="afeepaid" placeholder="Fee paid?" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        
      );
    }

  export default Meeting;