import { client } from '$lib/sanityClient';
import { aboutUsBannerQuery } from '$lib/queries/AboutUsBanner';

export async function GET() {
  try {
    const bannerData = await client.fetch(aboutUsBannerQuery);
    return new Response(JSON.stringify(bannerData), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch banner data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
