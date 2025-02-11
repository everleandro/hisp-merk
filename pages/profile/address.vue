<template>
    <div>
        <ul>
            <card-address v-for="(address, key) in 4" :model-value="address" :key="key" :active="checkActive(key)"
                @click="activeAddress = key" />
        </ul>
    </div>
</template>
<script lang="ts" setup>
useProfile({ title: 'Delivery Address' });
const activeAddress = ref(0);
const checkActive = (index: number) => activeAddress.value === index;
</script>