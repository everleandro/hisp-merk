<template>
    <div class="wellcome-page white--text">
        <div class="d-flex flex--column wellcome-page__content">
            <h1 class="text-center">Welcome to DHavana</h1>
            <p class="mb-12 text-center"> The Home for a fashionista</p>
            <e-button outlined class="btn--transparent" rounded color="white" to="/register/create">Get
                Started</e-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'empty'
})
</script>
<style lang="scss">
.wellcome-page {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('@/assets/images/header-bg.png') center center no-repeat;
    background-size: 0% 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &__content {
        z-index: 1;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 0;
    }
}
</style>