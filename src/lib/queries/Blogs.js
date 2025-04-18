export const blogListQuery = `
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    mainImage { asset->{url} }
  }
`;

