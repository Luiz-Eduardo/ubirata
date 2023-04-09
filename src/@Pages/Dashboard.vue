<template>
    <div>
        This is dashboard for user - <span>{{ auth.username }}</span>
    </div>
</template>

<script setup lang="ts">
import authStore from '@/@Stores/authStore';

const auth = authStore.useAuthStore();
</script>

<style scoped>

</style>