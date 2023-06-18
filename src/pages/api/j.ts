import { redis } from "../../utils/seoDB";

import type { APIRoute } from "astro";

export const get: APIRoute = async ({ request }) => {
  const data = await redis.hset('Course 5', {title: 'How to design fashion course using drizzle astro and react' ,description: "Code Tutorial: Building a Hilariously Optimized Course Website Welcome to this hilariously optimized code tutorial where we'll create a course website using some delightful code snippets. Brace yourself for a laugh-filled journey through programming and memes!", image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWByn_jpkqMVg67UgtOawhsz8sA8MsPaERK-MmeUfnJQ&s"})
  return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
};