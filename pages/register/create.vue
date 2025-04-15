<template>
    <centered-form title="Crear Cuenta">
        <e-form v-model="data.formModel" color="secondary">
            <e-textfield v-model="user.first_name" cols="24" :rules="[userRules._required]" placeholder="First Name" />
            <e-textfield v-model="user.last_name" cols="24" :rules="[userRules._required]" placeholder="Last Name" />
            <e-textfield v-model="user.email" cols="24" :rules="[userRules._email, userRules._required]"
                placeholder="Email" />
            <e-textfield v-model="user.password" cols="24" :rules="[userRules._required]" placeholder="Password"
                type="password" />
            <e-form-column>
                <e-spacer />
                <e-button rounded color="primary" block @click="create" :loading="data.loading"
                    :disabled="!data.formModel">
                    <span class="px-3">Crear</span>
                </e-button>
            </e-form-column>
        </e-form>
        <e-spacer></e-spacer>
        <div class="d-flex align-center justify-center mt-8">
            <p class="mb-0 mr-3 secondary--text"> Already have an account?</p>
            <e-button text to="/login" color="blue" style="text-decoration: underline;">
                Log in
            </e-button>
        </div>
    </centered-form>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'empty'
})
import type { User } from '@/types/user'
const profileStore = useProfileStore();
const userRules = useRules();
const userRouter = useRouter();
const user = reactive<Partial<User>>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
})
const data = reactive({ loading: false, formModel: true })
const create = async () => {
    const { success, data } = await profileStore.register(user)
    if (success) {
        userRouter.push('/login')
    }else{
        
    }
}
</script>