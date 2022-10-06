


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require
});

let serverAddress;


require('env-config', function (conf, envConfig) {
    console.log('The environment is: ', envConfig.env);
    serverAddress = envConfig;
});



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
const colonPlace = serverAddress.indexOf(":");
app.listen(serverAddress.substr(0, colonPlace - 1), serverAddress.substr(colonPlace + 1, serverAddress.lenght), () => {
});
