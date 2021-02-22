const mongoose = require('mongoose');

function connect(){
  // const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/essentialjs';
  const mongoURI = 'mongodb://localhost:27017/essentialjs';
  mongoose.connect( mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  mongoose.connection.once('open', () =>
    console.log('Connected with Essentialjs Database')
  );

  mongoose.connection.on('error', (err)=>
    console.log('Something went wrong with DB connection')
  );

}

module.exports = { connect }
