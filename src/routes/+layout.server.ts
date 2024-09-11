import type { LayoutServerLoad } from './$types';
import type { FileItem } from '$lib/types';

export const load: LayoutServerLoad = async ({ locals }) => {
  console.log('Locals in layout load function:', locals);
  const files = (locals as any).files || [];
  console.log('Files in layout load function:', files);
  return {
    files: files as FileItem[]
  };
};