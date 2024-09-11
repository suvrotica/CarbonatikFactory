import fs from 'fs/promises';
import path from 'path';
import { error } from '@sveltejs/kit';

export async function load() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'routes', 'Documents', 'index.md');
    const content = await fs.readFile(filePath, 'utf-8');
    return { content };
  } catch (e) {
    console.error('Error loading index.md:', e);
    throw error(404, 'Not found');
  }
}