<template>
    <div>
        <ul>
            <card-address v-for="(address, key) in 4" :model-value="address" :key="key" :active="checkActive(key)"
                @click="activeAddress = key" />
        </ul>
    </div>
</template>
<script lang="ts" setup>
import {AppBarType} from '~/types/bar';
useAppBar({ title: 'Delivery Address' },AppBarType.GO_BACK);
const activeAddress = ref(0);
const checkActive = (index: number) => activeAddress.value === index;
</script>