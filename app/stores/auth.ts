import { createAuthClient } from "better-auth/vue";

export const useAuthStore = defineStore("auth", () => {
  const authClient = createAuthClient();
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);
  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  const init = async () => {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  };

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    loading,
    signIn,
    signOut,
    init,
    user,
  };
});
