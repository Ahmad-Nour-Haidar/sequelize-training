const express = require('express');
const cors = require('cors');

const app = express();

// middleware

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//port

const PORT = process.env.PORT || 3000;

// server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
});