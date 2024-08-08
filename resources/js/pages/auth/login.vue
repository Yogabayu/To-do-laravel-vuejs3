<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <VCardTitle class="text-2xl font-weight-bold"> Todo List </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">Welcome 👋🏻</h5>
        <p class="mb-0">Please sign-in to your account</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <VCol cols="12">
              <VTextField v-model="form.email" autofocus placeholder="john.doe@gmail.com" label="E-mail" />
            </VCol>

            <VCol cols="12">
              <!-- login button -->
              <VBtn block type="submit"> Login </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
<script>
import mainURL from "@/axios";

export default {
  data() {
    return {
      userData: null,
      userToken: null,
      form: {
        email: null,
      },
      isPasswordVisible: false,
    };
  },
  methods: {
    saveUserDataAndToken(data) {
      localStorage.setItem("userData", JSON.stringify(data.user));
      localStorage.setItem("userToken", data.token.token);
    },

    async login() {
      try {
        const response = await mainURL.post("/login", {
          email: this.form.email,
        });

        if (response.status === 200) {
          this.saveUserDataAndToken(response.data);
          await this.$router.push("/dashboard");

          this.$showToast("success", "Yeay", "Selamat anda berhasil login, mengarahkan ke dashboard.....");
        } else {
          const errorMessage =
            response && response.data && response.data.message
              ? response.data.message
              : "Gagal login. Silakan coba lagi.";
          this.$showToast("error", "Sorry", errorMessage);
        }
      } catch (error) {
        const errorMessage =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "Gagal login. Silakan coba lagi.";
        this.$showToast("error", "Sorry", errorMessage);
      }
    },
  },
};
</script>
