export const GetDevotionalByIdQuery = (id: string) => `query GetDevotionalById {
    devotional(where: {id: "${id}"}) {
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
    }
}
`;
