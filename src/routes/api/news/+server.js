import { NEWS_API_KEY, NEWS_API_URL } from '$env/static/private';
import { slugify } from '$lib/utils';
export async function GET() {
  const url = `${NEWS_API_URL}?apikey=${NEWS_API_KEY}&category=technology&language=en`;

  const res = await fetch(url);
  const data = await res.json();

  const articles = data.results.map((item) => ({
    title: item.title,
    image: item.image_url,
    description: item.description,
    content: item.content || item.description,
    slug: slugify(item.title)
  }));

  return new Response(JSON.stringify(articles), {
    headers: { 'Content-Type': 'application/json' }
  });
}
