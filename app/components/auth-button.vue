<script setup lang="ts">
import { createAuthClient } from "better-auth/client";

const { accent } = defineProps({ accent: { type: Boolean, default: false } });

const authClient = createAuthClient();

async function signIn() {
  await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}
</script>

<template>
  <button
    class="btn"
    :class="{ 'btn-accent': accent }"
    @click="signIn"
  >
    Sign In with Github <Icon name="tabler:brand-github" />
  </button>
</template>
