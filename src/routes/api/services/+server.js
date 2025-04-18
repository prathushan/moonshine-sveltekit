import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { servicesQuery } from '$lib/queries/Services';

export async function GET() {
  try {
    const data = await client.fetch(servicesQuery);
    return json(data);
  } catch (error) {
    console.error('Error fetching services data:', error);
    return json({ error: 'Failed to load services data' }, { status: 500 });
  }
}
