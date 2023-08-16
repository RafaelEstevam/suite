const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
  origin: "*"
}));

const server = http.Server(app);

app.use(express.json());
app.use(routes);

const porta = process.env.PORT || 8081;

server.listen(porta, () => {
  console.log("Server open");
});