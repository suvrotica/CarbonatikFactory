<script lang="ts">
	import { page } from '$app/stores';
	import type { FileItem } from '$lib/types';

	export let files: FileItem[] = [];
	console.log('Files in FileNavigation:', files);

	$: activeFile = $page.url.pathname;
</script>

<nav>
	<ul>
		{#if files.length > 0}
			{#each files as file}
				<li class:active={activeFile === file.path}>
					<a href={file.path}>{file.name}</a>
				</li>
			{/each}
		{:else}
			<li>No files found</li>
		{/if}
	</ul>
</nav>

<style>
	.active {
		font-weight: bold;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		padding: 8px 16px;
		margin: 4px 0;
		border-radius: 4px;
	}

	li.active {
		background-color: var(--primary-color);
		color: white;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
