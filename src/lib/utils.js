export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word
    .replace(/\s+/g, '-')     // spaces to dashes
    .replace(/-+/g, '-')
    .trim();
}