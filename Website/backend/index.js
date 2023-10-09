import express from "express"
import mysql from "mysql"
import cors from "cors"
import Client from "pg"
const app = express()


const client = new Client.Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'Project1',
  password: 'password', // this is the password to get into your postgresql, not the server
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//dependencies
app.use(express.json())
app.use(cors())

//gets the homepage, useful for testing
app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

//EXAMPLE OF GET REQUEST
app.get("/getMeetings", (req, res) => { //meetings/:oid
    const query = "SELECT cid, cname, cattendance, cstartdate, cenddate, hname, hstate, hcity, hzip, haddress FROM meeting_information WHERE oid=1"
    client.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result.rows)
        }
    })
})

app.get("/getConference/:cid", (req, res) => {
    const cid = req.params.cid;
    const query = "SELECT * FROM meeting_information WHERE cid= $1"
    client.query(query, [cid], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result.rows[0])
        }
    })
})

app.get("/getAttendee/:cid", (req, res) => {
    const cid = req.params.cid;
    const query = "SELECT aname, aphone, aemail FROM attendee WHERE cid= $1"
    client.query(query, [cid], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result.rows)
        }
    })
})

app.get("/user/:oid", (req, res) => {
    const oid = req.params.oid;
    const query = "SELECT * FROM current_user_organization WHERE oid= $1"
    client.query(query, [oid], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error retrieving your conferences")
        } else {
            res.json(result.rows[0])
        }
    })
})

//EXAMPLE OF POST REQUEST
app.post("/api/form", (req, res) => {
    const query = "INSERT INTO conference (cname, cstartdate, cenddate, ccity, cfee, cattendance, cbudget, hname, oid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
      const VALUES = [
        req.body.cname,
        req.body.cstartdate,
        req.body.cenddate,
        req.body.ccity,
        req.body.cfee,
        req.body.cattendance,
        req.body.cbudget,
        req.body.hname,
        req.body.oid
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/api/attendees", (req, res) => {
    const query = "INSERT INTO attendee (aname, aphone, adiscount, aid, aemail, afeepaid, hname, cid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
      const VALUES = [
        req.body.aname,
        req.body.aphone,
        req.body.adiscount,
        req.body.aid,
        req.body.aemail,
        req.body.afeepaid,
        req.body.hname,
        req.body.cid
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/api/register", (req, res) => {
    const query = "INSERT INTO organization (oname, oaddress, ocity, ostate, ozip, oemail, ophone, oid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
      const VALUES = [
        req.body.oname, 
        req.body.oaddress,
        req.body.ocity,
        req.body.ostate,
        req.body.ozip, 
        req.body.oemail, 
        req.body.ophone, 
        req.body.oid 
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/api/hotel", (req, res) => {
    const query = "INSERT INTO hotel (HMaxMeetSize, HName, HState, hzip, haddress, hcontactphone, HPhone, HNumRooms, HCity) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
      const VALUES = [
        req.body.HMaxMeetSize, 
        req.body.HName,
        req.body.HState,
        req.body.HZip,
        req.body.HAddress, 
        req.body.HContactPhone, 
        req.body.HPhone, 
        req.body.HNumRooms,
        req.body.HCity 
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//EXAMPLE OF DELETE REQUEST
app.delete("/delete/:cid", (req, res) => {
    const deleteID = req.params.cid;
    const query = "DELETE FROM conference WHERE cid = $1"
    client.query(query, [deleteID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.put("/updateName/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const nameIn = req.body.cname;
    const query = "UPDATE conference SET cname = $2 WHERE cid = $1";
        
    client.query(query, [confID, nameIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateStart/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const startIn = req.body.cstartdate;
    const query = "UPDATE conference SET cstartdate = $2 WHERE cid = $1";
        
    client.query(query, [confID, startIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateEnd/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const endIn = req.body.cenddate;
    const query = "UPDATE conference SET cenddate = $2 WHERE cid = $1";
        
    client.query(query, [confID, endIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateCity/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const cityIn = req.body.ccity;
    const query = "UPDATE conference SET ccity = $2 WHERE cid = $1";
        
    client.query(query, [confID, cityIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateFee/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const feeIn = req.body.cfee;
    const query = "UPDATE conference SET cfee = $2 WHERE cid = $1";
        
    client.query(query, [confID, feeIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateAttendance/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const attendanceIn = req.body.cattendance;
    const query = "UPDATE conference SET cattendance = $2 WHERE cid = $1";
        
    client.query(query, [confID, attendanceIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

app.put("/updateBudget/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.cid;
    const budgetIn = req.body.cbudget;
    const query = "UPDATE conference SET cbudget = $2 WHERE cid = $1";
        
    client.query(query, [confID, budgetIn], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }

    })
})

// //EXAMPLE OF PUT REQUEST
// app.put("/updateMeeting/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
//     const confID = req.params.cid; //make sure when we present, that we mention that our assumptions
//     const query = "UPDATE conference SET cname = $1, cstartdate = $2, cenddate = $3, ccity = $4, cfee = $5, cattendance = $6, cbudget = $7, hname = $8 WHERE cid = $9" 
//     client.query(query, [cid], (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json(result)
//         }
//     })
// })


//listen on port 8080
app.listen(8080, () => {
  console.log("Server is running")
});