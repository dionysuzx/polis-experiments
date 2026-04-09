<script lang="ts">
  import { config } from '../config';
</script>

<svelte:head>
  <!-- Dynamic metadata based on config.ts -->
  <title>{config.pageTitle}</title>
  <meta name="description" content={config.description}>
  
  <!-- OpenGraph tags -->
  <meta property="og:url" content="{config.siteUrl}/">
  <meta property="og:type" content="article">
  <meta property="og:title" content={config.ogTitle}>
  <meta property="og:description" content={config.description}>
  <meta property="og:locale" content="en">
  <meta property="og:site_name" content={config.siteName}>
  <meta property="og:image" content="{config.siteUrl}{config.ogImage}">
  
  <!-- Twitter tags -->
  <meta name="twitter:card" content={config.twitterCardType}>
  <meta name="twitter:image" content="{config.siteUrl}{config.ogImage}">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="{config.siteUrl}/">
</svelte:head>

<slot />