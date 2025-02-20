templ<template>
    <div class="register-page">
        <div class=" register-page__content pa-6">
            <h1 class="text-center mb-12">Create your account</h1>
            <div class="register-page__form">
                <div>
                    <e-form>
                        <e-textfield cols="24" label="Name" />
                        <e-textfield cols="24" label="Email" />
                        <e-textfield cols="24" label="Password" />
                        <e-textfield cols="24" label="Confirm" />
                        <e-form-column>
                            <e-spacer />
                            <e-button rounded color="secondary">
                                <span class="px-3">Forgot password</span>
                            </e-button>
                        </e-form-column>
                    </e-form>
                </div>
                <e-spacer></e-spacer>
                <div class="d-flex align-center mt-12 mb-4">
                    <p class="mb-0 mr-3"> Already have an account?</p>
                    <e-button text to="/register/login">Log in</e-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'empty'
})
</script>
<style lang="scss">
.register-page {
    height: 100%;

    &__form {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
    }

    &__content {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>