<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const { accent } = defineProps({ accent: { type: Boolean, default: false } });

const authStore = useAuthStore();
</script>

<template>
  <button
    class="btn"
    :class="{ 'btn-accent': accent }"
    :disabled="authStore.loading"
    @click="authStore.signIn"
  >
    Sign In with Github
    <span v-if="authStore.loading" class="loading loading-spinner loading-md" />
    <Icon v-else name="tabler:brand-github" />
  </button>
</template>
