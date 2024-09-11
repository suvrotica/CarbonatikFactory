<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { ComponentType } from 'svelte';
  
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
  
  <slot />