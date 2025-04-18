export const servicesQuery = `
  *[_type == "services"][0]{
    mainTitle,
    secondaryTitle,
    cards[]{
      image{
        asset->{
          url
        }
      },
      title,
      description
    },
    button
  }
`;
