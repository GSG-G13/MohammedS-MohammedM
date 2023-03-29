const express = require('express');
const router = require('./controllers/index');
const app = express();
const path = require('path');
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(
  express.static(path.join(__dirname, '..', 'public'))
);
app.use(router);
module.exports = app;