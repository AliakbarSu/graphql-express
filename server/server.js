const path = require('path')
const express = require('express')
const server = express()
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const schema = buildSchema(`

type User {
  id: Int
  name: String
  email: String
  favourite_animal: String
  favourite_programming_language: String
}

  type RootQuery {
    user: User
  }

  schema {
    query: RootQuery
  }
`)

server.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: {
      user: {
        id: 1,
        name: 'Ali',
        email: 'unknown@example.com',
        favourite_animal: 'cat',
        favourite_programming_language: 'node.js'
      }
    },
    graphiql: true
  })
)

module.exports = server
