const typeDefs = `#graphql
  type User {
    _id: ID
    firstName: String
    email: String
    password: String
    savedStrains: [Strains]
    savedLocations: [Locations]
  }

  type Auth {
    token: ID!
    currentUser: User
  }

  type Illness {
    illnessId: ID!
    name: String
    effectOnUser: String
    link: String
}

  type Strain {
    strainId: ID!
    name: String
    description: String
    image: String
    link: String
    type: String
    illness: String
}

input StrainInput {
    strainId: ID!
    name: String
    description: String
    image: String
    link: String
    type: String
    illness: String
}

type Location {
    locationId: ID!
    city: String
    state: String
    zipCode: Int

input LocationInput {
    locationId: ID!
    city: String
    state: String
    zipCode: Int
}

  type Query {
    currentUser(email: String!): User
    strain: [Strain]!
    illness: [Illness]!
  }

type Mutation {
  register(
    firstName: String!
    email: String!
    password: String!
  ): Auth
  login(email: String!, password: String!): Auth
  saveStrain(saveStrain: StrainInput!): Auth
  deleteStrain(strainId: ID!): User
  saveLocation(saveLocation: LocationInput!): Auth
  deleteLocation(locationId: ID!): User
}
`;

module.exports = typeDefs;