import { Dcon } from "../../utils/db";
import { content } from "../../utils/schema";
import { redis } from "../../utils/seoDB";

import type { APIRoute } from "astro";
import fs from 'fs';

function readFileAsText(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

// Example usage
const filePath = './src/pages/api/x.txt';

readFileAsText(filePath)
  .then(fileContents => {
    console.log(fileContents); // The file contents as a string
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });


export const get: APIRoute = async ({ request }) => {
  const data = await Dcon.insert(content).values({content:await readFileAsText(filePath),title:"How to design fashion course using drizzle astro and react", course_id:5})
  return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
};