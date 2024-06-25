export const GetGalleryByIdQuery = (id: string) => `query GetGalleryById {
    gallery(where: {id: "${id}"}) {
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
