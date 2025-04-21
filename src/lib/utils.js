export function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')   // replace non-alphanum with dashes
      .replace(/(^-|-$)/g, '');      // remove starting/trailing dashes
  }
  