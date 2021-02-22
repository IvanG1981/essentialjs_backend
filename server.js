require('dotenv').config();
const express = require('express');
const cors = require('cors');
const  { connect } = require('./src/db');


const port = process.env.PORT;
const app = express();

connect();
app.use(cors());
app.use(express.json());


app.listen(port, ()=> {
  console.log(`Server running at port ${port}`);
});


