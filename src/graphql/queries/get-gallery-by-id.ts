export const GetGalleryByIdQuery = (id: string) => `query GetGalleryById {
    galleries(where: {id: "${id}"}) {
      title
      date
      id
      photos {
        id
        url
      }
    }
}
`;
