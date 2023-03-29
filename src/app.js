/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const path = require('path');
const express = require('express');
const { router } = require('./controllers/index');

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(
  express.static(path.join(__dirname, '..', 'public')),
);
app.use(router);
module.exports = app;
