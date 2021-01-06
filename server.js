const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const chalk = require('chalk');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/booksRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(homeRoutes);
app.use(authRoutes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

// mongodb setup
mongoose.connect(
    process.env.MONGO_DB,
    {useUnifiedTopology: true},
    () => {
        console.log(chalk.green.inverse("Connect to mongo"));
    }
);

app.listen(process.env.PORT, () => {
    console.log(chalk.blue.inverse("Applikácia beží na porte 5500"));
})