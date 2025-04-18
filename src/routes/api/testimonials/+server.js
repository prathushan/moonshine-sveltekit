import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { testimonialListQuery } from '$lib/queries/Testimonials';

export async function GET() {
  try {
    const data = await client.fetch(testimonialListQuery);
    return json(data);
  } catch (err) {
    return json({ error: 'Failed to load testimonials' }, { status: 500 });
  }
}
