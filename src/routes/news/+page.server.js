import { GNEWS_API_KEY, GNEWS_API_URL } from '$env/static/private';
import { slugify } from '$lib/utils.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const currentPage = parseInt(url.searchParams.get('page') || '1');
  const itemsPerPage = 10;

  // Fetch data from the API
  const apiUrl = `${GNEWS_API_URL}?q=ecommerce&lang=en&max=9&apikey=${GNEWS_API_KEY}`;
  const res = await fetch(apiUrl);

  // Ensure we have a valid response
  if (!res.ok) {
    console.error(`Error fetching data: ${res.statusText}`);
    throw new Error('Failed to fetch news articles');
  }

  const data = await res.json();
  if (!data.articles || !Array.isArray(data.articles)) {
    console.error('Invalid data structure:', data);
    throw new Error('No articles found or invalid response format');
  }
  const allArticles = data.articles
    .filter((item) => item.image)
    .map((item) => ({
      title: item.title,
      image: item.image,
      description: item.description || 'No description available.',
      content: item.content || item.description || 'No content available.',
      date: item.publishedAt,
      slug: slugify(item.title),
      url: item.url
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
