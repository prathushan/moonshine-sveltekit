import { client } from '$lib/sanityClient';

export async function load({ params }) {
  const { slug } = params;

  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    content,
    mainImage { asset->{url} },
    publishedAt
  }`;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    return {
      status: 404,
      error: new Error('Blog not found')
    };
  }

  return {
    blog
  };
}
