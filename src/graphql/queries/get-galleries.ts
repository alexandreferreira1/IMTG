interface GetGalleriesParams {
    searchTerm?: string;
    pageNumber: number;
    first: number;
  }

  export const GetGalleriesQuery = ({
    searchTerm = "",
    first,
    pageNumber,
  }: GetGalleriesParams) =>`query GetGalleries {
    galleries(
        where: {_search: "${searchTerm}"}
        first: ${first}
        skip: ${(pageNumber - 1) * first}
        orderBy: publishedAt_DESC
        stage: PUBLISHED
    ) {
        title
        date
        id
        photos (first: 100){
            id
            url
        }
        thumbnail {
            id
            url
        }       
    }
    galleriesConnection(
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
`