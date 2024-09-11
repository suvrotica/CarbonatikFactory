import { glob } from 'glob';
import * as path from 'path';
import type { Handle } from '@sveltejs/kit';
import type { FileItem } from '$lib/types';

let files: FileItem[] = [];

async function updateFileList() {
  try {
    const markdownFiles = await glob('src/routes/Documents/**/*.md');
    console.log('Found Markdown files:', markdownFiles);
    files = markdownFiles.map(file => {
      const name = path.basename(file, '.md');
      let filePath = '/' + path.relative('src/routes/Documents', file)
        .replace('.md', '')
        .replace(/\s+/g, '-')
        .toLowerCase();
      
      // Handle the index file specially
      if (filePath === '/index') {
        filePath = '/';
      }
      
      return { name, path: filePath };
    });
    console.log('Processed files:', files);
  } catch (error) {
    console.error('Error updating file list:', error);
  }
}
export const handle: Handle = async ({ event, resolve }) => {
  if (!files.length || process.env.NODE_ENV === 'development') {
    await updateFileList();
  }
  
  event.locals.files = files;
  console.log('Files in handle function:', event.locals.files);
  
  const response = await resolve(event);
  return response;
};

// Ensure initial file list is generated
updateFileList();