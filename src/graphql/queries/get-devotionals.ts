export const GetDevotionalsQuery = `query GetDevotionals() {
    devotionals {
      date
      id
      title
      createdBy {
        name
      }
      thumbnail {
        url
      }
      resume
    }
  }
`