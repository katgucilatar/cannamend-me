// MUTATIONS: LOGIN_USER, REGISTER_USER

import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      currentUser {
        email
        firstName
        _id
      }
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      email: $email
      password: $password
    ) {
      currentUser {
        firstName
      }
      token
    }
  }
`;

export const SAVE_LOCATION = gql`
  mutation saveLocation($saveLocation: LocationInput!) {
    saveLocation(saveLocation: $saveLocation) {
      currentUser {
        _id
        email
        savedLocations {
            locationId
            city
            state
            zipCode
        }
      }
      token
    }
  }
`;

export const DELETE_LOCATION = gql`
  mutation deleteLocation($locationId: ID!) {
    deleteLocation(locationId: $locationId) {
      _id
      email
      savedLocations {
        locationId
        city
        state
        zipCode
      }
    }
  }
`;

export const SAVE_STRAIN = gql`
  mutation saveStrain($saveStrain: StrainInput!) {
    saveStrain(saveStrain: $saveStrain) {
      currentUser {
        _id
        email
        savedStrains {
            strainId
            name
            description
            image
            link
            type
            illness
        }
      }
      token
    }
  }
`;

export const DELETE_STRAIN = gql`
  mutation deleteStrain($strainId: ID!) {
    deleteStrain(strainId: $strainId) {
      _id
      email
      savedStrains {
        strainId
        name
        description
        image
        link
        type
        illness
      }
    }
  }
`;