<template>
    <div ref="container" class="home-offer">
        <swiper class="mySwiper" :spaceBetween="30">
            <swiper-slide v-for="i in 6"><card-offer color="primary" title="Atumn Collection 2022" /></swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
export interface Props {
    offerList: number[]
}
const props = defineProps<Props>()
const container = ref<HTMLDivElement | null>(null);

const model = ref(0)
let startX = 0, endX = 0

const touchstart = (evt: TouchEvent) => {
    startX = evt.touches[0].clientX;
};
const touchend = (evt: TouchEvent) => {
    endX = evt.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            model.value = (model.value - 1 + props.offerList.length) % props.offerList.length;
        } else {
            model.value = (model.value + 1) % props.offerList.length;
        }
    }
};
onMounted(() => {
    if (container.value) {
        container.value.addEventListener('touchstart', touchstart, { passive: false });
        container.value.addEventListener('touchend', touchend, { passive: true });
    }
});

onUnmounted(() => {
    if (container.value) {
        container.value.removeEventListener('touchstart', touchstart);
        container.value.removeEventListener('touchend', touchend);
    }
});
</script>
<style lang="scss">
.home-offer {
    touch-action: none;
    /* Prevenir comportamiento táctil predeterminado */
}
</style>