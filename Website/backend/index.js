import express from "express"
import mysql from "mysql"
import cors from "cors"
import Client from "pg"
const app = express()


const client = new Client.Client({
  user: 'postgres',
  host: '127.0.0.1',
  //database: 'Project1',
  //password: 'password', // this is the password to get into your postgresql, not the server
  //port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected! YAY Good Job!");
});

//dependencies
app.use(express.json())
app.use(cors())

//gets the homepage, useful for testing
app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

//EXAMPLE OF GET REQUEST
app.get("/getDevices", (req, res) => { //devices/:did
    const query = "SELECT did, dlocation, dip, dcdistance, dpdistance, dcisp, dpisp, dsisp, FROM device_information WHERE did=1"
    client.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result.rows)
        }
    })
})

app.get("/getDevice/:did", (req, res) => {
    const cid = req.params.cid;
    const query = "SELECT * FROM device_information WHERE did= $1"
    client.query(query, [did], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result.rows[0])
        }
    })
})

//EXAMPLE OF POST REQUEST
app.post("/api/form", (req, res) => {
    const query = "INSERT INTO device (dlocation, dip, dcdistance, dpdistance, dcisp, dpisp, dsisp, did) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
      const VALUES = [
        req.body.dlocation,
        req.body.dip,
        req.body.dcdistance,
        req.body.dpdistance,
        req.body.dcisp,
        req.body.dpisp,
        req.body.dsisp,
        req.body.did
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
app.delete("/delete/:did", (req, res) => {
    const deleteID = req.params.cid;
    const query = "DELETE FROM device WHERE did = $1"
    client.query(query, [deleteID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.put("/updateName/:did", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    const confID = req.params.did;
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



//app.put("/updateBudget/:cid", (req, res) => { // make an updateFormPage. takes an input. do a listener. 
    //const confID = req.params.cid;
    //const budgetIn = req.body.cbudget;
    //const query = "UPDATE conference SET cbudget = $2 WHERE cid = $1";
        
    //client.query(query, [confID, budgetIn], (err, result) => {
        //if (err) {
            //console.log(err)
        //} else {
            //res.json(result)
        //}

    //})
//})

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