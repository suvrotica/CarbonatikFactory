<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import FileNavigation from '$lib/components/FileNavigation.svelte';
	import * as Resizable from "$lib/components/ui/resizable";
	
	export let data;
	</script>
	
	<ModeWatcher />
	
	<Resizable.PaneGroup direction="horizontal">
	  <Resizable.Pane minSize={15} maxSize={40}>
		<div class="h-screen p-4 bg-muted overflow-auto">
		  <h2 class="text-lg font-semibold mb-4">Files</h2>
		  <FileNavigation files={data.files} />
		</div>
	  </Resizable.Pane>
	  <Resizable.Handle withHandle />
	  <Resizable.Pane>
		<main class="h-screen overflow-auto p-4">
		  <slot />
		</main>
	  </Resizable.Pane>
	</Resizable.PaneGroup>