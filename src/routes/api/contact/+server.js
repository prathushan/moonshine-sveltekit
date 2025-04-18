import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { contactQuery } from '$lib/queries/Conatct'
export async function GET() {
  try {
    const data = await client.fetch(contactQuery);
    return json(data); // Return the contact data
  } catch (err) {
    console.error('Contact fetch failed:', err);
    return json({ error: 'Failed to fetch contact data' }, { status: 500 });
  }
}
