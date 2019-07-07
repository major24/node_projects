const express = require('express');
const app = express();
const path = require('path');

const { data1, data2, data3, data4 } = require('./app/data');
const { getMatchedCoordinates }  = require('./app/mapLevelService');

const lookup = {
  "data1": data1,
  "data2": data2,
  "data3": data3,
  "data4": data4
};

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/www/index.html'));
});

app.get('/api/map', function(req, res) {
  const mapid = req.query.id;
  res.send({map: lookup[mapid]});
  res.end();
});

app.get('/api/map/match/level', function(req, res) {
  const row = req.query.row;
  const col = req.query.col;
  const mapid = req.query.id;
  const result = getMatchedCoordinates(lookup[mapid], row, col);
  // console.log('result from process: ', result);

  res.send({levelMatched: result});
  res.end();
});

app.listen(8080);
