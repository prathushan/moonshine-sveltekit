export const imageCardsQuery = `
  *[_type == "imageCards"][0] {
    title,
    cards[] {
      _key,
      heading,
      text,
      backgroundColor,
      image {
        asset-> {
          url
        }
      }
    }
  }
`;
