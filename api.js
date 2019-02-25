const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
});

app.get('/ayo', (req, res)=>{
    res.send('Ayo is a good man');
})

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;