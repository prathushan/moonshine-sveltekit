export const contactQuery = `*[_type == "contactPage"][0] {
    title,
    description,
    address {
      icon {
        asset-> {
          url
        }
      },
      addressDetails
    },
    phone {
      icon {
        asset-> {
          url
        }
      },
      phoneDetails
    },
    email {
      icon {
        asset-> {
          url
        }
      },
      emailDetails
    }
  }`;
  