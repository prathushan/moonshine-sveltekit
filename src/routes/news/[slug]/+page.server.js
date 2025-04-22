import { GNEWS_API_KEY, GNEWS_API_URL } from '$env/static/private';
import { slugify } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const apiUrl = `${GNEWS_API_URL}?q=ecommerce&lang=en&max=50&apikey=${GNEWS_API_KEY}`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  const articles = data.articles.map((item) => ({
    title: item.title,
    image: item.image,
    description: item.description || 'No description',
    content: item.content || item.description || 'No content',
    date: item.publishedAt,
    slug: slugify(item.title),
    url: item.url
  }));

  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    throw error(404, 'Article not found');
  }

  return { article };
}
