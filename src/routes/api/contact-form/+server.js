import { json } from '@sveltejs/kit';
import { client } from '$lib/sanityClient';

export async function POST({ request }) {
  try {
    const data = await request.json();

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      return json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create document in Sanity
    const res = await client.create({
      _type: 'contactSubmission',
      name: data.name,
      email: data.email,
      message: data.message,
      submittedAt: new Date().toISOString()
    });

    return json({ success: true, id: res._id }, { status: 200 });

  } catch (err) {
    console.error('Form submission error:', err);
    return json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
