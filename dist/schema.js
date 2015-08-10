// schema.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _graphqlType = require('graphql/type');

var count = 0;

var schema = new _graphqlType.GraphQLSchema({
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
});

exports['default'] = schema;
module.exports = exports['default'];