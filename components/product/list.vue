<template>
    <div class="my-8 product-list">
        <div class="product-list__header pa-3">
            <h2 v-if="title" class="my-4 ">{{ title }}</h2>
            <e-spacer />
            <e-button text small><span class="show-button-text">show all</span></e-button>
        </div>
        <swiper :slidesPerView="itemsPerView" :spaceBetween="30" class="mySwiper pa-3">
            <swiper-slide v-for="i in 5" :key="i">
                <product-card :row="rowItem" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts" setup>

export interface Props {
    title?: string,
    rowItem?: boolean,
    itemsPerView?: number
}
const props = withDefaults(defineProps<Props>(), { itemsPerView: 2.5 })

</script>
<style lang="scss">
.product-list {
    list-style-type: none;

    .show-button-text {
        text-transform: none;
        font-weight: lighter;
    }

    &__header {
        display: flex;
        align-items: center;
    }
}
</style>