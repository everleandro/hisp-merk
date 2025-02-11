<template>
    <div class="pa-3">
        <app-message :append-icon="$icon.star" title="Your Order is delivered" color="secondary" transparent>
            Rate this product for get 5 point in collect
        </app-message>
    </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const { setBar } = useAppBar();

onNuxtReady(() => {
    setBar({ title: `Order #${route.params.id}` });
});
</script>