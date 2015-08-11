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
var permissions = ['read', 'write', 'ownProjects', 'getClientContacts'];

var projectType = new _graphqlType.GraphQLObjectType({
  name: 'Project',
  description: 'The project resource(s)',
  fields: function fields() {
    return {
      id: {
        type: _graphqlType.GraphQLInt,
        description: 'The id of the project.'
      },
      name: {
        type: _graphqlType.GraphQLString,
        description: 'The name of the project.'
      }
    };
  }
});

var clientType = new _graphqlType.GraphQLObjectType({
  name: 'Client',
  type: _graphqlType.GraphQLString,
  description: 'Some client resource',
  resolve: function resolve() {
    return 'arbitrary client data';
  }
});

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
      project: {
        type: projectType,
        args: {
          id: {
            description: 'id of the human',
            type: _graphqlType.GraphQLInt
          }
        },
        resolve: function resolve(root, _ref) {
          var id = _ref.id;

          return { id: id, name: 'test' };
        }
      },
      client: clientType
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