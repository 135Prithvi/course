import { redis } from "../../utils/seoDB";

import type { APIRoute } from "astro";

export const get: APIRoute = async ({ request }) => {
  const data = await redis.hset('Course 1', {title: 'Introduction to Markdown' ,description: "This tutorial will show you how to use Markdown in Markdown format to create a markdown file.", image_url:"https://img-c.udemycdn.com/course/750x422/4333300_773e_4.jpg"})
  return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
};