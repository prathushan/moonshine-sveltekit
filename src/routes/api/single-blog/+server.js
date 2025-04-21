import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { singleBlogQuery } from '$lib/queries/Singleblog.js';

export async function GET({ url }) {
  const slug = url.searchParams.get('slug'); // Getting the slug from the URL query parameter

  if (!slug) {
    return json({ error: 'Missing slug parameter' }, { status: 400 });
  }

  try {
    const data = await client.fetch(singleBlogQuery(slug)); // Fetch the blog data from Sanity

    if (!data) {
      return json({ error: 'Blog not found' }, { status: 404 });
    }

    return json(data); // Return the blog data
  } catch (err) {
    console.error('Error fetching blog:', err);
    return json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
