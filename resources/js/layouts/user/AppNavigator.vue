<template>
    <v-navigation-drawer v-model="localDrawer" temporary>
        <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title" :title="item.title"
            :class="{ 'v-btn--active': $route.path === item.value }" :to="item.value"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
            <v-list-item>
                <v-select v-model="selectedCategory" :items="categories" label="Category" density="compact"
                    variant="outlined" hide-details></v-select>
            </v-list-item>
            <v-list-item>
                <v-text-field v-model="searchQuery" label="Search products" prepend-inner-icon="mdi-magnify"
                    density="compact" variant="outlined" hide-details></v-text-field>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['drawer']);
const emit = defineEmits(['update:drawer']);

const localDrawer = ref(props.drawer);

watch(() => props.drawer, (newVal) => {
    localDrawer.value = newVal;
});

watch(localDrawer, (newVal) => {
    emit('update:drawer', newVal);
});
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
</script>
