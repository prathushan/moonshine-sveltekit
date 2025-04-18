export const oddEvenQuery = `
  *[_type == "oddEven"][0] {
    mainHeading,
    buttonText,
      buttonLink,
    sections[] {
      _key,
      highlight,
      description,
      testimonial {
        quote,
        name,
        companyLogo {
          asset-> {
            url
          }
        }
      }
    }
      
  }
`;
