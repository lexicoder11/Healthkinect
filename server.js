require("dotenv").config();
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ();

const PORT = process.env.PORT || 3000;
const DBNAME = process.env.DBNAME
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL + DBNAME)
const DB = mongoose.connection;
DB.once("open",()=>{
    console.log("Connected to the DB", DBNAME);
})

app.use (express.json());
app.use(cors());


app.get ('/test', (req,res) => {
    res.send('Server is up and running');
});

app.listen(PORT, ()=> {
    console.log("Server is running on port", PORT);
})