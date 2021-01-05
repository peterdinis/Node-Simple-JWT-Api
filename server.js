const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const chalk = require('chalk');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(homeRoutes);
app.use(authRoutes);
app.use(express.json());

// mongodb setup
mongoose.connect(
    process.env.MONGO_DB,
    {useUnifiedTopology: true},
    () => {
        console.log(chalk.green.inverse("Connect to mongo"));
    }
)

app.listen(5500, () => {
    console.log(chalk.blue.inverse("Applikácia beží na porte 5500"));
})