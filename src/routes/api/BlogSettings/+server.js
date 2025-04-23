import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';
import { blogSettingsQuery } from '$lib/queries/BlogSettings';

export async function GET() {
  try {
    const settings = await client.fetch(blogSettingsQuery);
    return json(settings);
  } catch (error) {
    console.error('Failed to fetch blog section title:', error);
    return json({ error: 'Failed to fetch blog section settings' }, { status: 500 });
  }
}
