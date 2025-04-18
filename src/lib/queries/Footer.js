// queries.js
export const footerQuery = `
  *[_type == "footer"][0] {
    ecoBadge { asset->{url} },
    ecoText,
    companyLinks,
    contactEmail,
    contactNote,
    companyLogo { asset->{url} },
    copyright,
    footerButtons
  }
`;
