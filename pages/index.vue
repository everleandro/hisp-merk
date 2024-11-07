<template>
    <div class="home-page">
        <product-detail v-model="productDetails" key="details" />
        <client-filter v-model:view="state.viewType" />
        <div class="pa-2 mt-4">
            <div class="tab__container">
                <transition :name="listTrasition">
                    <e-row :key="`${state.viewType}`">
                        <e-col v-show="state.viewType === switchType.option1" cols="24" key="swip-product"
                            class="swip-product-vertical">
                            <Swiper slides-per-view="auto" space-between="12" :loop-additional-slides="10"
                                :loop="false">
                                <SwiperSlide v-for="slide in 10" :key="slide" :clickable="true">
                                    <card-product vertical @show:details="showProductDetails" />
                                </SwiperSlide>
                            </Swiper>
                        </e-col>
                        <e-col v-for="i in 5" v-show="state.viewType === switchType.option1" cols="24" sm="8" md="6"
                            lg="4" :key="`${i}-product`">
                            <card-product @show:details="showProductDetails" />
                        </e-col>
                        <e-col v-for="i in 5" v-show="state.viewType === switchType.option2" cols="24" sm="12" md="8"
                            lg="6" :key="`${i}-commerce`">
                            <card-commerce />
                        </e-col>
                        <e-col v-show="state.viewType === switchType.option1" cols="24" key="swip-product-squared"
                            class="swip-product-squared">
                            <Swiper slides-per-view="auto" space-between="12" :loop-additional-slides="10"
                                :loop="false">
                                <SwiperSlide v-for="slide in 10" :key="slide" :clickable="true">
                                    <card-product squared @show:details="showProductDetails" />
                                </SwiperSlide>
                            </Swiper>
                        </e-col>
                    </e-row>
                </transition>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'
const state = reactive({
    viewType: switchType.option1
})
const productDetails = ref(false);

const listTrasition = computed(() => state.viewType === switchType.option1 ? 'tab-reverse-transition' : 'tab-transition')
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