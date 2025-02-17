<template>
    <div>
        <e-row class="ma-0">
            <e-col>
                <product-cart model-value="1" :is-active="test" @click="test = !test" />
            </e-col>
        </e-row>
    </div>
</template>
<script lang="ts" setup>
useBarTemporary({ title: 'Your Cart' });
const test = ref(false)
</script>