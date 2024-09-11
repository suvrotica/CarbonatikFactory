import type { FileItem } from '$lib/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			files: FileItem[];
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};