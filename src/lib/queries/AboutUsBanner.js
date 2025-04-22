export const aboutUsBannerQuery = `*[_type == "aboutusBanner"][0]{
    bannerImage {
      asset->{
        url
      }
    },
    heading,
    description
  }`;
  