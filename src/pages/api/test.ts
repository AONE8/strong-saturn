import type { APIRoute } from "astro";

export async function GET() {
  return Response.json(
    { msg: "Hello, World!" },
    {
      status: 200,
    }
  );
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  return Response.json(body, { status: 200 });
};
