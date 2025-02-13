<template>
    <div class="store-header">
        <Swiper slides-per-view="auto" :modules="[SwiperAutoplay, SwiperEffectCreative]" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" space-between="12" :loop-additional-slides="10" :loop="false">
            <SwiperSlide v-for="slide in 6" :key="slide" :clickable="true">
                <img src="@/assets/images/commerce-bg.webp" alt="">
            </SwiperSlide>
        </Swiper>
        <store-wave />
    </div>
</template>
<style lang="scss">
.store {
    &-wave {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: -2px;
    }

    &-header {
        z-index: -1;
        position: sticky;
        top: 0;
        margin-top: -54px;

        img {
            aspect-ratio: 2;
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