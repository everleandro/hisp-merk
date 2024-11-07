<template>
    <div class="commerce-page">
        <div class="commerce-page__header">
            <Swiper slides-per-view="auto" :modules="[SwiperAutoplay, SwiperEffectCreative]" :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }" space-between="12" :loop-additional-slides="10" :loop="false">
                <SwiperSlide v-for="slide in 6" :key="slide" :clickable="true">
                    <img src="@/assets/images/commerce-bg.webp" alt="">
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="white">
            <e-row class="ma-0">
                <e-col cols="24">
                    <div class="d-flex align-center">
                        <h2>Panaderia Las delicias</h2>
                        <e-spacer></e-spacer>
                        <div class="d-flex justify-center align-center">
                            <e-button :icon="$icon.star" text color="yellow" />
                            <div>4.9</div>
                        </div>
                    </div>
                </e-col>
                <e-divider></e-divider>
                <e-col cols="24">
                    <h3>Vendedor</h3>
                    <card-seller />
                </e-col>
                <e-divider></e-divider>
            </e-row>
        </div>
        <div class="commerce-page__product-container">
            <div class="pa-3 align-center d-block mt-3 d-md-flex">
                <h2 class="mb-3">Productos</h2>
                <e-spacer></e-spacer>
                <e-textfield :prepend-icon="$icon.magnify" class="white mb-3"></e-textfield>
            </div>
            <e-row>
                <e-col v-for="i in 5" cols="24" sm="8" md="6" lg="4" :key="i">
                    <card-product />
                </e-col>
            </e-row>
        </div>
    </div>
</template>
<script lang="ts" setup>

onMounted(() => {
    // setHeaderImageList(["@/assets/images/commerce-bg.webp", "@/assets/images/commerce-bg.webp"])

})
</script>

<style lang="scss">
.commerce-bar {
    z-index: 1;
    backdrop-filter: blur(5px);
    background-color: transparent
}

.commerce-page {

    &__product-container {
        backdrop-filter: blur(10px);
    }

    &__header {
        position: relative;

        img {
            aspect-ratio: 16 / 14;
            width: 100%;
            object-fit: cover;
            top: 0;

            @include mixin.from_sm {
                aspect-ratio: 3 / 1;
            }
        }
    }


}
</style>