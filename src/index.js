const app = require('./app');
 
const getChamp = () => {
  fetch('http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json')
   .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
}
app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});

module.exports = getChamp;