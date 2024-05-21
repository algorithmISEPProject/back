const hobbyTypeDefs = `#graphql
type Hobby {
  # Example field (placeholder)
  exampleField: Int
}

input CreateHobbyInput {
  # Example field (placeholder)
  exampleField: Int
}

input UpdateHobbyInput {
  id: Int!
}

type Query {
  hobby: [Hobby]!
  hobby(id: Int!): Hobby
}

type Mutation {
  createHobby(createHobbyInput: CreateHobbyInput!): Hobby!
  updateHobby(updateHobbyInput: UpdateHobbyInput!): Hobby!
  removeHobby(id: Int!): Hobby
}
`;
