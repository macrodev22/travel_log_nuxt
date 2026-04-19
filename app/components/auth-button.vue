<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const { accent } = defineProps({ accent: { type: Boolean, default: false } });

const authStore = useAuthStore();
</script>

<template>
  <details v-if="authStore.user && !authStore.loading" class="dropdown dropdown-end">
    <summary class="btn m-1">
      <div v-if="authStore.user.image" class="avatar size-6">
        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img :src="authStore.user.image">
        </div>
      </div>
      {{ authStore.user.name }}
    </summary>
    <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <button @click="authStore.signOut">
          <Icon name="tabler:logout-2" size="14" />
          Sign Out
        </button>
      </li>
    </ul>
  </details>
  <button
    v-else
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
