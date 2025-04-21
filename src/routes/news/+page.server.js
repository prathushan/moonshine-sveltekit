import { NEWS_API_KEY, NEWS_API_URL } from '$env/static/private';
import { slugify } from '$lib/utils.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const currentPage = parseInt(url.searchParams.get('page') || '1');
  const itemsPerPage = 10;

  const apiUrl = `${NEWS_API_URL}?apikey=${NEWS_API_KEY}&category=business&language=en&q=ecommerce`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  const allArticles = data.results
    .filter((item) => item.image_url)
    .map((item) => ({
      title: item.title,
      image: item.image_url,
      description: item.description,
      content: item.content?.includes('ONLY AVAILABLE') ? item.description : item.content || item.description,
      slug: slugify(item.title)
    }));

  const totalItems = allArticles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedArticles = allArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    articles: paginatedArticles,
    currentPage,
    totalPages
  };
}
