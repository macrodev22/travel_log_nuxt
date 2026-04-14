<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({

  get(): boolean {
    return colorMode.value === "dark";
  },
  set(value): void {
    colorMode.preference = value ? "dark" : "light";
  },

});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <Icon
      name="tabler:sun"
      class="swap-on"
      size="24"
    />

    <!-- moon icon -->
    <Icon
      name="tabler:moon-filled"
      size="24"
      class="swap-off"
    />
  </label>
</template>
