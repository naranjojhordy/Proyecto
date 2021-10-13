const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 8080;
app.listen(port, () =>{
    console.log(`Servidor web funcionando en el puerto` + port);
});


