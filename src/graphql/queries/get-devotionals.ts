interface GetDevotionalsParams {
  searchTerm?: string;
  pageNumber: number;
  first: number;
}

export const GetDevotionalsQuery = ({
  searchTerm = "",
  first,
  pageNumber,
}: GetDevotionalsParams) => `query GetDevotionals {
  devotionals(
    where: {_search: "${searchTerm}"}
    first: ${first}
    skip: ${(pageNumber - 1) * first}
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
      skip: ${(pageNumber - 1) * first}
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
