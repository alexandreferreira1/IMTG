import { gql, GraphQLClient } from "graphql-request";

import hygraphClient from "./hygraph-client";

const hygraphURL = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "";

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
export default new GraphQLClient(hygraphURL, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_DEV_AUTH_TOKEN}`,
  },
});
