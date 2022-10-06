
import { config } from './'


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
    { title: 'Hello, world (again)!' }
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


// starting the server
app.listen(process.env.ENV_VARIABLE.app.host, process.env.ENV_VARIABLE.app.port, () => {
    // console.log('listening on port 3000');
});

export default app;