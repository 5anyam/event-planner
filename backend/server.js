const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()

//connect to database 
const connection_url = 'mongodb+srv://sanyam:Sanyam123@cluster0.5efgv.mongodb.net/doyenclub?retryWrites=true&w=majority';

mongoose.connect(connection_url, { useNewUrlParser:true , useCreateIndex:true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
 connection.once('open', () => {
    console.log("mongoDB database connection established successfully");

    const collection = connection.collection("Event");
    const changeStream = collection.watch();

    changeStream.on('change' , (change) => {
        console.log("A change happen" , change);
    });

});

//Init Middlewares
app.use(express.json({ extended: false }))

// define routes
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guests'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server started at port ${PORT}`))