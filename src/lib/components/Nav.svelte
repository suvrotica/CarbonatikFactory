<script lang="ts">
  import '../app.css';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import * as Menubar from '$lib/components/ui/menubar';
  import { browser } from '$app/environment';
</script>

<ModeWatcher />

{#if browser}
  <Menubar.Root>
    <Menubar.Menu>
      <Menubar.Trigger>Factory Details</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item>Overview</Menubar.Item>
        <Menubar.Item>Production Lines</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Carbon Footprint</Menubar.Item>
        <Menubar.Item>Energy Usage</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

    <Menubar.Menu>
      <Menubar.Trigger>About Carbonatik</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item>Our Mission</Menubar.Item>
        <Menubar.Item>Team</Menubar.Item>
        <Menubar.Separator />
        <Menubar.Item>Contact Us</Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>

    <Menubar.Separator />

    <Menubar.Menu>
      <Menubar.Trigger>
        <DarkModeToggle />
      </Menubar.Trigger>
    </Menubar.Menu>
  </Menubar.Root>
{/if}

<slot />