export const GetDevotionalSearch = (
  searchTerm: string,
) => `query GetDevotionalSearch {
  devotionals(where: {_search: "${searchTerm}"}) {
    id
    title
    createdBy {
      name
    }
    date
    thumbnail {
      url
    }
    content {
      html
    }
    resume
  }
}
`;
