const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ();

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME
const DB_URL = process.env.DB_URL

const EXPRESS_API = express()
mongoose.connect(DB_URL + DB_NAME)
const DB = mongoose.connection


app.use(express.json());


app.get ('/test', (req,res) => {
    res.send('Server is up and running');
});

app.listen(PORT, ()=> {
    console.log("Server is running on port", PORT);
})