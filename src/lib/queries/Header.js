export const headerQuery = `
  *[_type == "header"][0] {
    logo {
      asset->{url}
    },
    menuItems[] {
      _key,
      label,
      linkedPage->{_id, title, slug},
      children[] {
        _key,
        label,
        linkedPage->{_id, title, slug}
      }
    }
  }
`;