<template>
    <svg :width="size" :height="size" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g id="main">
            <rect class="cls-1" height="55" rx="3.27" width="52" x="6" y="8" />

            <path class="cls-2"
                d="M19,59H13.27A3.28,3.28,0,0,1,10,55.73V43a1,1,0,0,1,2,0V55.73A1.27,1.27,0,0,0,13.27,57H19a1,1,0,0,1,0,2Z" />

            <polygon class="cls-3" points="17 2 47 2 32 47 17 2" />

            <path class="cls-4"
                d="M40,26.05l-.64,14.06L33,47.38V49H31V47.38l-7-8V26a.86.86,0,0,1,0-.28c1.44-4.88-.44,1.49,5-17A1,1,0,0,1,30,8h4a1,1,0,0,1,1,.72l5,17A1.15,1.15,0,0,1,40,26.05Z" />

            <path class="cls-2"
                d="M37.83,1.45A1,1,0,0,0,37,1H27a1,1,0,0,0-.83.45,1,1,0,0,0-.09.94l3,7A1,1,0,0,0,30,10h4a1,1,0,0,0,.92-.61l3-7A1,1,0,0,0,37.83,1.45Z" />

            <path class="cls-5"
                d="M53.64,22.23l-5-4.14,4.88-3.26a1,1,0,0,0,.34-1.28l-6-12A1,1,0,0,0,47,1H17a1,1,0,0,0-.89.55l-6,12a1,1,0,0,0,.34,1.28l4.88,3.26-5,4.14a1,1,0,0,0-.36.69,1,1,0,0,0,.25.74L24,39.38l7,8V63h2V47.38l6.36-7.27L53.75,23.66a1,1,0,0,0,.25-.74A1,1,0,0,0,53.64,22.23ZM32,43.84C23.5,18.35,26.56,27.53,18.39,3H45.61Z" />

        </g>

    </svg>
</template>
<script lang="ts" setup>
import type { IconSvgProps } from './props';
const props = withDefaults(defineProps<IconSvgProps>(), { size: 45 })
</script>
<style scoped>
.cls-1 {
    fill: #546c8c;
}

.cls-2 {
    fill: #194568;
}

.cls-3 {
    fill: #ffffff;
}

.cls-4 {
    fill: #e43056;
}

.cls-5 {
    fill: #bcc2d7;
}
</style>