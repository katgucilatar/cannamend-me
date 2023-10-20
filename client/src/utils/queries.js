import { gql } from "@apollo/client";

export const QUERY_CURRENT_USER = gql`
  query getCurrentUser($email: String!) {
    currentUser(email: $email) {
      _id
      email
      firstName
      savedStrains {
        strainId
        name
        description
        image
        link
        type
        illness
      }
      savedLocations {
        locationId
        city
        state
        zipCode
      }
    }
  }
`;

export const QUERY_STRAINS = gql`
  query getStrains {
    strain {
      strainId
      name
      description
      image
      link
      type
      illness
      }
    }
`;

export const QUERY_ILLNESSES = gql`
  query getIllnesses {
    illness {
      illnessId
      name
      effectOnUser
      link
      }
    }
`;