require('dotenv').config();
const express = require('express');
const cors = require('cors');
const  { connect } = require('./src/db');
const postRouter = require('./src/routes/post');


const port = process.env.PORT;
const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use('/posts', postRouter);


app.listen(port, ()=> {
  console.log(`Server running at port ${port}`);
});


