const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');

require('dotenv').config()
require('./database/connection');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'))
app.use(express.json());
app.use(userRouter);


app.listen(8000, () => {
    console.log("Listening on port 8000")
})
