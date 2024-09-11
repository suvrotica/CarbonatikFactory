<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { ComponentType } from 'svelte';
	import * as Resizable from "$lib/components/ui/resizable";
	
	let ClientMenubar: ComponentType | null = null;
	
	onMount(async () => {
	  const module = await import('$lib/components/ClientMenubar.svelte');
	  ClientMenubar = module.default as ComponentType;
	});
	</script>
	
	<ModeWatcher />
	
	{#if browser && ClientMenubar}
	  <svelte:component this={ClientMenubar} />
	{/if}
	
	<Resizable.PaneGroup direction="horizontal">
	  <Resizable.Pane minSize={15} maxSize={40}>
		<div class="h-screen p-4 bg-muted">
		  <h2 class="text-lg font-semibold mb-4">Navigation</h2>
		  <nav>
			<ul>
			  <li><a href="/">Home</a></li>
			  <li><a href="/about">About</a></li>
			  <!-- Add more navigation items as needed -->
			</ul>
		  </nav>
		</div>
	  </Resizable.Pane>
	  <Resizable.Handle withHandle />
	  <Resizable.Pane>
		<main class="h-screen overflow-auto p-4">
		  <slot />
		</main>
	  </Resizable.Pane>
	</Resizable.PaneGroup>