<script lang="ts">
    import * as Menubar from '$lib/components/ui/menubar';
    import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  </script>
  
  <Menubar.Root class="menubar-root">
    <div class="menu-items">
      <Menubar.Menu>
        <Menubar.Trigger>Factory Details</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Overview</Menubar.Item>
          <Menubar.Item>Production Lines</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
  
      <div class="horizontal-separator"></div>
  
      <Menubar.Menu>
        <Menubar.Trigger>About Carbonatik</Menubar.Trigger>
      </Menubar.Menu>
    </div>
  
    <div class="toggle-container">
      <DarkModeToggle />
    </div>
  </Menubar.Root>
  
  <style>
    :global(.menubar-root) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  
    .menu-items {
      display: flex;
      align-items: center;
    }
  
    .horizontal-separator {
      height: 24px;  /* Adjust as needed */
      width: 1px;
      background-color: #ccc;  /* Adjust color as needed */
      margin: 0 8px;  /* Adjust spacing as needed */
    }
  
    .toggle-container {
      margin-left: auto;
    }
  </style>