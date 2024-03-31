<template>
  <div class="wrapper">
    <TheMainNav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheMainNav from '@/components/TheMainNav.vue';
</script>
