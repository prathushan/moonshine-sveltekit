export const faqQuery = `
  *[_type == "faqSection"][0] {
    title,
    questions[]{
      question,
      answer,
      _key,
      "extraFields": extraFields[]{
        fieldLabel,
        fieldType,
        value,
        _key
      }
    }
  }
`;
