import * as pin from 'pinia';
import { ref } from 'vue';

const useAuthStore = pin.defineStore("auth", () => {
    const isAuthorized = ref<boolean>(false)
    const username = ref<string>();

    const authenticate = (status: boolean, userName?: string) => {
        isAuthorized.value = status;
        username.value = userName;
    }

    return {
        isAuthorized,
        username,
        authenticate
    }
});

export default {
    useAuthStore,
};