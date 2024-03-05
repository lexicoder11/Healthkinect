require("dotenv").config();

const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const paymentController = require ('./controllers/payment.controller')
const userController = require ('./controllers/user.controller')

const PORT = process.env.PORT || 4000;
const DBNAME = process.env.DBNAME;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL + DBNAME)
const DB = mongoose.connection;
DB.once("open",()=>{
    console.log("Connected to the DB", DBNAME);
})

app.use (express.json());
app.use(cors());

// test 
app.get ('/test', (req,res) => {
    res.send('Server is up and running');
});

// routes
app.use('/payments', paymentController)
app.use('/user', userController)
app.use('stripe', stripe)


app.listen(PORT, ()=> {
    console.log("Server is running on port", PORT);
})