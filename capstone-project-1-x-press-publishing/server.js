const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const errorHandler = require('errorhandler');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;



app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(errorHandler());

const apiRouter= require('./API/api');
app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log(`Server is listening on Port ${PORT}`);
})

module.exports = app
