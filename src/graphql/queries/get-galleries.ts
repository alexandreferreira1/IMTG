export const GetGalleriesQuery = `query GetGalleries {
    galleries {
        title
        date
        id
        photos {
            id
            url
        }
        thumbnail {
            id
            url
        }
    }
}
`