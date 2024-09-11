<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    let MarkdownComponent: any;
    let loadError = false;
    
    onMount(async () => {
      const path = $page.url.pathname;
      console.log('Current path:', path);
      
      try {
        // Remove leading slash and replace remaining slashes with hyphens
        const cleanPath = path.slice(1).replace(/\//g, '-');
        const module = await import(`../../routes/Documents/${cleanPath}.md`);
        MarkdownComponent = module.default;
      } catch (error) {
        console.error('Failed to load Markdown file:', error);
        MarkdownComponent = null;
        loadError = true;
      }
    });
    </script>
    
    <div class="prose dark:prose-invert max-w-none">
      {#if MarkdownComponent}
        <svelte:component this={MarkdownComponent} />
      {:else if loadError}
        <p>Content not found.</p>
      {:else}
        <p>Loading content...</p>
      {/if}
    </div>