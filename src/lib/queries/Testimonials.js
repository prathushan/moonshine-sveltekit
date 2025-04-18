export const testimonialListQuery = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    twitterHandle,
    comment,
    image {
      asset->{
        url
      }
    }
  }
`;
