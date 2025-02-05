<template>
    <div class="my-8 app-list">
        <div class="app-list__header pa-3">
            <h2 v-if="title" class="my-4 ">{{ title }}</h2>
            <e-spacer />
            <e-button text small :append-icon="$icon.chevronRight">
                <span class="show-button-text">show more</span>
            </e-button>
        </div>
        <swiper :slidesPerView="itemsPerView" :spaceBetween="spaceBetween" class="mySwiper pa-3">
            <swiper-slide v-for="i in 5" :key="i">
                <slot></slot>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts" setup>

export interface Props {
    title?: string,
    itemsPerView?: number
    spaceBetween?: number
}
const props = withDefaults(defineProps<Props>(), { itemsPerView: 2.5, spaceBetween: 16 })

</script>
<style lang="scss">
.app-list {
    list-style-type: none;

    .show-button-text {
        // text-transform: none;
        font-weight: 400;
    }

    &__header {
        display: flex;
        align-items: center;

        .e-btn::before {
            opacity: .05;
        }
    }
}
</style>