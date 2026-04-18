import { createAuthClient } from "better-auth/client";

export const useAuthStore = defineStore("auth", () => {
  const authClient = createAuthClient();

  const loading = ref(false);

  async function signIn() {
    loading.value = true;
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
    loading.value = false;
  }

  return {
    loading,
    signIn,
  };
});
