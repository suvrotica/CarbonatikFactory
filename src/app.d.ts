import type { FileItem } from '$lib/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			files: Array<{ name: string; path: string }>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};