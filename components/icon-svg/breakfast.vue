<template>

    <svg :width="size" :height="size" viewBox="0 0 1024 1024" class="icon" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1024 223.328a128 128 0 0 0-128-128H384a128 128 0 0 0-128 128c0 47.264 25.92 88.064 64 110.24v529.76a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V333.6c38.08-22.208 64-63.008 64-110.272z"
            fill="#EDD87E" />
        <path
            d="M320 863.328V333.6c-38.08-22.208-64-63.008-64-110.272a128 128 0 0 1 128-128H128a128 128 0 0 0-128 128c0 47.264 25.92 88.064 64 110.24v529.76a64 64 0 0 0 64 64h256a64 64 0 0 1-64-64z"
            fill="#E29460" />
        <path
            d="M896 95.328H384a128 128 0 0 0-128 128c0 47.264 25.92 88.064 64 110.24v529.76a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V333.6c38.08-22.176 64-63.008 64-110.24a128.032 128.032 0 0 0-128-128.032z m0 192v528a48 48 0 0 1-48 48h-416a48 48 0 0 1-48-48v-528a64 64 0 0 1 0-128h512a64 64 0 0 1 0 128z"
            fill="" />
        <path
            d="M64 333.6v17.76h256v-17.76c-38.08-22.208-64-63.008-64-110.272H0c0 47.264 25.92 88.064 64 110.272zM320 863.328H64a64 64 0 0 0 64 64h256a64 64 0 0 1-64-64z"
            fill="" />
        <path d="M592 335.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M752 399.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M784 271.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M688 495.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M528 495.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M784 655.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M496 687.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M752 783.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M592 719.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
        <path d="M496 239.328m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="" />
    </svg>
</template>
<script lang="ts" setup>
import type { IconSvgProps } from './props';
const props = withDefaults(defineProps<IconSvgProps>(), { size: 45 })
</script>