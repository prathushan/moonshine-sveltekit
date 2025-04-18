import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { blogListQuery } from '$lib/queries/Blogs';

export async function GET() {
  try {
    const data = await client.fetch(blogListQuery);
    return json(data);
  } catch (err) {
    return json({ error: 'Failed to load blogs' }, { status: 500 });
  }
}
