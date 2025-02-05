<template>
    <div class="home-page">
        <product-detail v-model="productDetails" key="details" />
        <div class="">
            <filter-category v-model="state.category" />
        </div>
        <div class="ma-3">
            <home-header :offer-list="[1, 2, 3, 4, 5, 6]" />
        </div>
        <app-list title="Feature Products." :itemsPerView="2.5">
            <product-card />
        </app-list>

        <div class="pa-3">
            <card-offer reverse title="new collection" subtitle="HANG OUT & PARTY" small-title />
        </div>
        <app-list title="Recomended" :itemsPerView="1.5">
            <product-card row />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
        <app-list title="Recomended" :itemsPerView="1.3">
            <commerce-card />
        </app-list>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'
import { Category } from '~/types';
const state = reactive({
    viewType: switchType.option1,
    category: Category.All
})
const productDetails = ref(false);

const showProductDetails = () => {
    console.log('show details 2');
    productDetails.value = true;
}
</script>
<style lang="scss">
.home-page {
    .swip-product-squared {
        .swiper-slide {
            width: 70%;

            @include mixin.from_sm {
                width: 250px;
                text-align: center;
            }

        }
    }

    .swip-product-vertical {
        .swiper-slide {
            width: 150px;

            @include mixin.from_sm {
                width: 250px;
                text-align: center;
            }

        }
    }
}
</style>