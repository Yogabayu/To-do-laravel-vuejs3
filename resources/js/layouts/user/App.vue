<template>
  <v-app :theme="theme">
    <router-view />
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
