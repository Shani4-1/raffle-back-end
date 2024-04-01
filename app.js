const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json({ data:'Server is running!' });
});

module.exports = app;


