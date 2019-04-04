const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const port = 5432;

require('./config/db');
require('./models/NameModel');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors()); // include before other routes
app.use(morgan('dev'));

// Gig routes
require('./routes/name')(app);

app.listen(port, () => console.log(`Server running on port ${port}`));