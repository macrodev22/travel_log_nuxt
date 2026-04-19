<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppNavBar />
    <main>
      <slot />
    </main>
  </div>
</template>
