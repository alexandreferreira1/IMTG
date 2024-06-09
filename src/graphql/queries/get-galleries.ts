export const GetGalleriesQuery = `query GetGalleries {
    galleries {
        title
        date
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