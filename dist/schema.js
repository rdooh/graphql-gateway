// schema.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _graphqlType = require('graphql/type');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

//console.log(R.add(2, 3)); // test ramda

var count = 0;

// Some simple permission set
var permissions = ['read', 'write', 'getScore'];

// The extracted schema object
var schemaObject = {
  query: new _graphqlType.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: _graphqlType.GraphQLInt,
        description: 'the count',
        resolve: function resolve() {
          return count;
        }
      },
      score: {
        type: _graphqlType.GraphQLInt,
        description: 'the score',
        resolve: function resolve() {
          return count;
        }
      }
    }
  }),
  mutation: new _graphqlType.GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCount: {
        type: _graphqlType.GraphQLInt,
        description: 'Updates the count',
        resolve: function resolve() {
          count += 1;
          return count;
        }
      }
    }
  })
};

var schema = new _graphqlType.GraphQLSchema(schemaObject);

exports['default'] = schema;
module.exports = exports['default'];