templ<template>
    <div class="centered-form pa-6">
        <div class="centered-form__content">
            <div class="pa-4 centered-form__wrapper">
                <h1 v-if="title" class="text-center mb-6">{{title}}</h1>
                <e-divider v-if="title" class="mb-4 secondary" />
                <div class="centered-form__form">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props=defineProps<{
    title?: string,
}>()
</script>
<style lang="scss">
.centered-form {
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