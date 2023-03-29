/* eslint linebreak-style: ["error", "windows"] */
const express = require('express');

const router = express.Router();
const { getData, searchData } = require('./champ');
const { clientError, serverError } = require('./error');

router.get('/getChampion', getData);
router.get('/getChampion/:search', searchData);

router.use(clientError);
router.use(serverError);

module.exports = { router };
