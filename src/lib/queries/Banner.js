export const bannerQuery = `
  *[_type == "banner"][0] {
    heading,
    description,
    buttonText,
    buttonLink,
    rating,
    images[]{
      asset->{url}
    }
  }
`;