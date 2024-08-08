<template>
    <v-app-bar app flat class="px-3 header-gradient" elevation="1">
        <v-responsive class="d-flex align-center">
            <v-icon icon="mdi-leaf" class="mr-2" color="light-green-darken-3"></v-icon>
            <v-app-bar-title class="text-h5 font-weight-bold d-none d-sm-flex">
                FreshScent
            </v-app-bar-title>
            <v-app-bar-title class="text-h6 font-weight-bold d-flex d-sm-none">
                FSSS
            </v-app-bar-title>
        </v-responsive>

        <v-spacer></v-spacer>

        <!-- Search bar with category dropdown - visible on larger screens -->
        <div class="d-none d-md-flex align-center mx-4">
            <v-select v-model="selectedCategory" :items="categories" label="Category" density="compact"
                variant="outlined" hide-details class="mr-2" style="max-width: 150px;"></v-select>
            <v-text-field v-model="searchQuery" label="Search products" prepend-inner-icon="mdi-magnify"
                density="compact" variant="outlined" hide-details style="width: 200px;"></v-text-field>
        </div>

        <!-- Menu items - visible on larger screens -->
        <!-- <div class="d-none d-md-flex">
            <v-btn v-for="item in menuItems" :key="item" variant="text" class="mx-1"
                :class="{ 'v-btn--active': item === activeItem }" @click="activeItem = item">
                {{ item }}
            </v-btn>
        </div> -->
        <div class="d-none d-md-flex">
            <v-btn v-for="item in menuItems" :key="item.title" variant="text" class="mx-1"
                :class="{ 'v-btn--active': $route.path === item.value }" :to="item.value">
                {{ item.title }}
            </v-btn>
        </div>

        <!-- Icons - always visible -->
        <v-btn icon="mdi-shopping-outline" class="ml-2" :to="'/cart'"></v-btn>
        <v-btn :icon="theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'" @click="toggleTheme"
            class="ml-2"></v-btn>

        <!-- Mobile menu icon -->
        <v-app-bar-nav-icon @click="$emit('toggle-drawer')" class="d-md-none"></v-app-bar-nav-icon>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['theme']);
const emit = defineEmits(['toggle-drawer', 'toggle-theme']);
const route = useRoute();
// const menuItems = ['Home', 'Services', 'About', 'Contact'];
const menuItems = [
    { title: 'Home', value: '/dashboard' },
    { title: 'Services', value: '/service' },
    { title: 'Shop', value: '/shop' },
];
const activeItem = ref('Home');
const selectedCategory = ref('all');
const searchQuery = ref('');
const categories = [
    { title: 'All Categories', value: 'all' },
    { title: 'Home Fragrances', value: 'home' },
    { title: 'Personal Care', value: 'personal' },
    { title: 'Aromatherapy', value: 'aromatherapy' },
    { title: 'Seasonal Scents', value: 'seasonal' }
];

function toggleTheme() {
    emit('toggle-theme');
}
</script>

<style scoped>
.v-btn--active {
    border-bottom: 2px solid currentColor;
}
</style>
