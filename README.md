# graphql-gateway
A test project to create an api gateway-like server app that uses graphql to front end a collection of microservices

### Sooo...
I'm going to try a few things here, to see if I can prototype something akin to an api gateway. I'm aiming to keep this light and generic - not so much because I anticipate it being used by anyone, but so as to keep distractions to a minimum.
- pass initial request to some trivial/mock authentication + authorization handler that returns some permissions
- dynamically generate the GraphQL type schema based on the permissions
- return modified introspection results
- route queries to trivial underlying services

### Progress
Just popped a basic example from [Clay Allsopp](https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2) - that's all for the moment.

### Run it
`node dist/app.js` should do the trick

### And Then....
We'll see where we're at.
