export const cardsSectionQuery = `*[_type == "cardsSection"][0]{
    sectionTitle,
    cards[]{
      cardTitle,
      cardImage{
        asset->{
          url
        }
      }
    }
  }`;
  