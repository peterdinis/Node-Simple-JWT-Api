const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const chalk = require('chalk');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));

app.listen(5500, () => {
    console.log(chalk.blue.inverse("Applikácia beží na porte 5500"));
})