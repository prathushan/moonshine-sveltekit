import { json } from "@sveltejs/kit";
import { client } from "$lib/sanityClient";

export async function POST({ request }) {
  try {
    const data = await request.json();

    if (!data.email) {
      return json({ error: "Missing required fields" }, { status: 400 });
    }

    const res = await client.create({
      _type: "subscriber",
      email: data.email,
      submittedAt: new Date().toISOString(),
    });

    return json({ success: true, id: res._id }, { status: 200 });
  } catch (err) {
    console.error("Form submission error:", err);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
}
