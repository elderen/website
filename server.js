const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

// Server instance
const app = express()
const port = process.env.PORT || 3000;

// Middleware
app.use(parser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// APIs


// Listening...
app.listen(port, ()=>{
  console.log(`Listening on port ${port} .....`)
})