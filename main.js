const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3008, function () {
  console.log('USUARIO:jaime CONTRASEÑA:jaime12A');
});