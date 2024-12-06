interface GetDevotionalsLikedProps {
  likedDevotionals: string[];
}

export const GetDevotionalsLiked = ({
  likedDevotionals,
}: GetDevotionalsLikedProps) => `query GetDevotionalsLiked {
  devotionals(
    stage: PUBLISHED
    where: {
      id_in: ${JSON.stringify(likedDevotionals)}
    }
  ) {
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
