// queries.js
export const footerQuery = `
  *[_type == "footer"][0] {
    ecoBadge { asset->{url} },
    ecoText,
    companyLinks,
    socialLinks[] {
      platform,
      url,
      icon { asset->{url} }
    },
    contactEmail,
    contactNote,
    companyLogo { asset->{url} },
    copyright,
    footerButtons
  }
`;
