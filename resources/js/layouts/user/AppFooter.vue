<template>
    <v-footer app class="pa-6">
        <v-row justify="center" no-gutters>
            <v-col cols="12" sm="4" class="mb-4">
                <h3 class="text-h6 mb-3 font-weight-bold">About Us</h3>
                <p class="text-body-2">FreshScent is a leading provider of premium scenting solutions. We transform
                    spaces
                    with carefully crafted fragrances, enhancing environments for businesses and homes alike.</p>
            </v-col>
            <v-col cols="12" sm="4" class="mb-4">
                <h3 class="text-h6 mb-3 font-weight-bold">Connect With Us</h3>
                <div class="d-flex mb-3">
                    <v-icon v-for="icon in socialIcons" :key="icon" :icon="icon" class="mr-4" size="24"></v-icon>
                </div>
                <p class="text-body-2">Follow us for the latest updates and fresh inspiration!</p>
            </v-col>
            <v-col cols="12" sm="4" class="mb-4">
                <h3 class="text-h6 mb-3 font-weight-bold">Newsletter</h3>
                <v-text-field label="Enter your email" append-inner-icon="mdi-send" variant="outlined"
                    density="comfortable" bg-color="primary-lighten-1"></v-text-field>
                <p class="text-caption mt-2">Subscribe to receive exclusive offers and news.</p>
            </v-col>
            <v-col cols="12" class="text-center mt-4">
                <p class="text-caption">&copy; {{ new Date().getFullYear() }} FreshScent. Breathe in the difference.</p>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const socialIcons = ['mdi-facebook', 'mdi-twitter', 'mdi-instagram', 'mdi-linkedin'];
</script>
