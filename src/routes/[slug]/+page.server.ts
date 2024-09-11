import fs from 'fs/promises';
import path from 'path';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { slug } = params;
  try {
    const filePath = path.join(process.cwd(), 'src', 'routes', 'Documents', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return { content };
  } catch (e) {
    console.error(`Error loading ${slug}.md:`, e);
    throw error(404, 'Not found');
  }
}