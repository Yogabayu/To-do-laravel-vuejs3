<template>
  <v-app :theme="theme">
    <router-view />
    <!-- <AppHeader @toggle-drawer="toggleDrawer" @toggle-theme="toggleTheme" :theme="theme" />
    <AppNavigator v-model:drawer="drawer" />
    <v-main>
      <v-container fluid class="shop-beyond-boundaries-section py-12">
        <v-row justify="center">
          <v-col cols="12">
            <v-img src="https://picsum.photos/1600/900" alt="Let's Shop Beyond Boundaries" height="300"
              class="custom-rounded" cover>
              <v-row align="center" justify="center" class="fill-height">
                <v-col cols="12" class="text-center">
                  <h2 class="text-h2 font-weight-bold text-white">"Let's Shop Beyond Boundaries"</h2>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main> -->
    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const theme = ref('light');
const drawer = ref(false);

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
}

function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>

<style scoped>
.custom-rounded {
  border-radius: 16px; /* Anda bisa menyesuaikan nilai ini sesuai preferensi */
  overflow: hidden; /* Ini memastikan konten tidak melewati border radius */
}

/* Opsional: Tambahkan bayangan untuk efek yang lebih menonjol */
.custom-rounded {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
