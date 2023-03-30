/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require('node-fetch');

const getData = (req, res) => {
  fetch('http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

const searchData = (req, res) => {
  fetch(`http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${req.params.search}.json`)
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};

module.exports = { getData, searchData };
