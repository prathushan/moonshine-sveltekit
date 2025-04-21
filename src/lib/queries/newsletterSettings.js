// lib/queries/newsletterSettings.js

export const getNewsletterHeadingQuery = `*[_type == "newsletterSettings"][0]{
    heading
  }`;
  