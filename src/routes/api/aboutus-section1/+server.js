import { client } from '$lib/sanityClient';
import { aboutUsSection1Query } from '$lib/queries/AboutUsSection1';

export async function GET() {
  const sectionData = await client.fetch(aboutUsSection1Query);
  return new Response(JSON.stringify(sectionData), {
    headers: { 'Content-Type': 'application/json' }
  });
}
