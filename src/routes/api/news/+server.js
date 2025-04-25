import { GNEWS_API_KEY } from '$env/static/private';
import { slugify } from '$lib/utils.js';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const res = await fetch(`https://gnews.io/api/v4/search?q=ecommerce&lang=en&apikey=${GNEWS_API_KEY}`);
  const data = await res.json();

  const articles = data.articles.map((item) => ({
    title: item.title,
    image: item.image,
    description: item.description,
    content: item.content,
    date: item.publishedAt,
    url: item.url,
    slug: slugify(item.title)
  }));

  return new Response(JSON.stringify(articles));
}