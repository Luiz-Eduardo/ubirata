<template>
    <div>
        <input class="bg-blue-300 p-1 m-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white" type="button" value="Authorize Me" @click="authorize" />
        <span>{{ auth.isAuthorized }}</span>
    </div>
</template>

<script setup lang="ts">
import authStore from '@/@Stores/authStore';

const auth =  authStore.useAuthStore();
//const isAuthorized = ref<boolean>(false);

const getRandomString = () : string => {
    return (Math.random().toString(36).substring(2, 10));
}
const authorize = () => {
    const uname = getRandomString()
    
    auth.authenticate(!auth.isAuthorized, uname)
}
</script>

<style scoped>

</style>