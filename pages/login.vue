<template>
    <centered-form title="Login">
        <div>
            <e-form v-model="data.formModel" color="secondary">
                <e-textfield v-model="data.email" :rules="[userRules._email, userRules._required]"
                    :prepend-icon="$icon.account" cols="24" placeholder="Email" />
                <e-textfield v-model="data.password" :rules="[userRules._required]" :prepend-icon="$icon.lock" cols="24"
                    placeholder="Password" :type="data.inputType" :append-icon="passwordAppendIcon"
                    @click:prepend="inputTypeBehavior()" />
                <e-form-column>
                    <e-spacer />
                    <e-button rounded color="primary" block @click="login" :loading="data.loading"
                        :disabled="!data.formModel">
                        <span class="px-3">Log in</span>
                    </e-button>
                </e-form-column>
            </e-form>
        </div>
        <e-spacer></e-spacer>
        <div class="d-flex align-center justify-center mt-8">
            <p class="mb-0 mr-3 secondary--text"> Don’t have an account?</p>
            <e-button text to="/register/create" color="blue" style="text-decoration: underline;">
                Sign Up
            </e-button>
        </div>
    </centered-form>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'empty'
})
import { useAuthStore } from '@/stores/auth';
const { $icon } = useNuxtApp()

const userRules = useRules();

const router = useRouter();
const authStore = useAuthStore();
const data = reactive({
    email: "ever.leandros91@gmail.com",
    inputType: "password",
    loading: false,
    formModel: true,
    password: "N0ladar3+-+*",
})

const login = async () => {
    data.loading = true
    const response = await authStore.login(data.email, data.password)
    const token = await authStore.loadToken();
    if (authStore.isAuthenticated) {
        router.push('/')
    }
    data.loading = false
}
const inputTypeBehavior = () => {
    console.log("asd")
    data.inputType = data.inputType === "password" ? "text" : "password"
}
const passwordAppendIcon = computed(() => {
    return undefined
    // return data.inputType === "password" ? $icon.eye : $icon.eyeOff
})
</script>