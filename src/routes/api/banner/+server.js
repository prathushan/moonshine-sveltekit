import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { bannerQuery } from '$lib/queries/Banner';

export async function GET() {
  try {
    const data = await client.fetch(bannerQuery);
    return json(data);
  } catch (err) {
    console.error('Banner fetch failed:', err);
    return json({ error: 'Failed to fetch banner' }, { status: 500 });
  }
}
