templ<template>
    <div class="register-page pa-6">
        <div class="register-page__content">
            <div class="pa-4">
                <h1 class="text-center mb-6">Log In</h1>
                <e-divider class="mb-4 secondary" />
                <div class="register-page__form">
                    <div>
                        <e-form>
                            <e-textfield cols="24" label="Email" />
                            <e-textfield cols="24" label="Password" />
                            <e-form-column>
                                <e-spacer />
                                <e-button rounded color="secondary" to="/home">
                                    <span class="px-3">Log in</span>
                                </e-button>
                            </e-form-column>
                        </e-form>
                    </div>
                    <e-spacer></e-spacer>
                    <div class="d-flex align-center mt-8">
                        <p class="mb-0 mr-3 secondary--text"> Don’t have an account?</p>
                        <e-button text to="/register/create" color="blue" style="text-decoration: underline;">
                            Sign Up
                        </e-button>
                    </div>
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('@/assets/images/header-bg.png') center center no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &__content {
        z-index: 1;

        &>div {
            border-radius: 4px;
            backdrop-filter: blur(6px);
            background-color: rgba(255, 255, 255, .7);
        }
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // background: rgba(0, 0, 0, 0.7);
        z-index: 0;
    }
}
</style>