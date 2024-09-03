import { gql, GraphQLClient } from "graphql-request";

import hygraphClient from "./hygraph-client";
import { env } from "@/env";

console.log(env)

const makeRequest = async (queryFetch: string) => {
  const query = gql`
    ${queryFetch}
  `;

  try {
    const data = await hygraphClient.request(query);

    return data;
  } catch (error) {
    console.log({ error });
  }
};


export { gql, makeRequest };

// eslint-disable-next-line import/no-anonymous-default-export
export default new GraphQLClient(env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${env.NEXT_PUBLIC_HYGRAPH_DEV_AUTH_TOKEN}`,
  },  
});

