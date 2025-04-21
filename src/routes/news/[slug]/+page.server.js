import { NEWS_API_KEY, NEWS_API_URL } from '$env/static/private';
import { slugify } from '$lib/utils.js';

export async function load({ params }) {
  const url = `${NEWS_API_URL}?apikey=${NEWS_API_KEY}&category=business&language=en&q=ecommerce`;
  const res = await fetch(url);
  const data = await res.json();

const articles = data.results
  .filter((item) => item.image_url)
  .map((item) => ({
    title: item.title,
    image: item.image_url,
    description: item.description,
    content: item.content?.includes('ONLY AVAILABLE IN PAID PLANS')
      ? item.description
      : item.content || item.description,
    slug: slugify(item.title)
  }));

  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      status: 404,
      error: new Error('Article not found')
    };
  }

  return { article };
}
