const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4545;
const ctrl = require('./controllers')


//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here

app.get('/categories', ctrl.categories)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));