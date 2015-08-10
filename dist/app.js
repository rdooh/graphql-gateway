'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

// new dependencies

var _graphql = require('graphql');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var app = (0, _express2['default'])();
var PORT = 3000;

// parse POST body as text
app.use(_bodyParser2['default'].text({ type: 'application/graphql' }));

app.post('/graphql', function (req, res) {
  // execute GraphQL!
  (0, _graphql.graphql)(_schema2['default'], req.body).then(function (result) {
    res.send(JSON.stringify(result, null, 2));
  });
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});