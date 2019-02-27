//this help us to use the express module which is part of the node modules
const express = require('express');

const app = express();

//here we declare a GET HTTP method which takes in the url and also a callback method which has 
//request and response as parameters. 

app.get('/user', (req, res) => {
  res.send('ci with travis');
});



const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;