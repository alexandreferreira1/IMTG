interface GetDevotionalsParams {
  searchTerm?: string;
  skip?: number;
  first: number;
}

export const GetDevotionalsQuery = ({
  searchTerm = "",
  first,
  skip = 0,
}: GetDevotionalsParams) => `query GetDevotionals {
  devotionals(
    where: {_search: "${searchTerm}"}
    first: ${first}
    skip: ${skip}
    orderBy: publishedAt_DESC
    stage: PUBLISHED
  ) {
      id
      date
      title
      createdBy {
        name
      }
      thumbnail {
        url
      }
      resume
    }
    devotionalsConnection(
      where: {_search: "${searchTerm}"}
      first: ${first},
      skip: ${skip}
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
      aggregate {
        count
      }
    }
  }
`;
