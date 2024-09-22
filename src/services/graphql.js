import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://26.17.32.40:8080/graphql';

export const client = new GraphQLClient(endpoint);

export const fetchData = async (query, variables = {}) => {
  return await client.request(query, variables);
};
export const createUser = async (name, email, phone, password, adm) => {
  const mutation = `
    mutation CreateUser($name: String!, $email: String!, $phone: String!, $password: String!, $adm: String!) {
      createUser(name: $name, email: $email, phone: $phone, password: $password, adm: $adm) {
        id
        name
        email
        phone
        adm
      }
    }
  `;

  const variables = { name, email, phone, password, adm };

  return await client.request(mutation, variables);
};
