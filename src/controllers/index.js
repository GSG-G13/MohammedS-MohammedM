const express = require('express');

const router = express.Router();
const { getData,searchData } = require('./champ');
const { clientError, serverError } = require('./error');

router.get('/getChamp', getData);
router.get('/getChamp/:search', searchData);

router.use(clientError);
router.use(serverError);

module.exports = { router };
