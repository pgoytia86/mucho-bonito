const express = require('express');
const data = require('./data.js');
const colors = require('colors');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log('Mucho Bonito Servidor Arriba! at http://localhost:5000'.rainbow);
});
