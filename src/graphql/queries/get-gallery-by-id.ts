export const GetGalleryByIdQuery = (id: string) => `query GetGalleryById {
    gallery(where: {id: "${id}"}) {
      title
      date
      id
      photos (first: 100){
        id
        url
      }
    }
}
`;
