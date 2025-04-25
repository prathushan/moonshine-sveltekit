export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')    
    .replace(/-+/g, '-')
    .trim();
}