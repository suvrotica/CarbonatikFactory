export const prerender = true;

type ModuleType = {
  default: {
    $$render: () => string;
  };
};

const modules: Record<string, () => Promise<ModuleType>> = import.meta.glob('../routes/Documents/**/*.md');

export async function load({ params }: { params: { slug?: string } }) {
  const path = params.slug ? `../routes/Documents/${params.slug}.md` : '../routes/Documents/index.md';
  
  if (path in modules) {
    const module = await modules[path]();
    return { content: module.default };
  }
  
  throw new Error('Not found');
}