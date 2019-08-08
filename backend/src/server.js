const express = require('express'); // acesso a biblioteca do express
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express(); // servidor do express

mongoose.connect('mongodb+srv://intwone:cassio9874123@cluster0-sr8iy.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
}); // conexão com o banco de dados

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3300); // porta do servidor