export const blogSettingsQuery = `*[_type == "blogSettings"][0]{
  "sectionTitle": pt::text(sectionTitle)
}`;
