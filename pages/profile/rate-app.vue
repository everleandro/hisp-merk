<template>
    <div class='pa-3 rate-app-section'>
        <h4>What is your opinion of D.Havana?</h4>
        <app-rate v-model="rateValue" class="mb-4" />
        <form>
            <app-textarea v-model="rateText" elevated limit="100"
                placeholder="Would you like to write anything about this product?" />
            <e-button block class="mt-6" color="secondary" rounded>send feedback</e-button>
        </form>
    </div>
</template>
<script lang="ts" setup>
useBarTemporary({ title: 'Share your feedback' });
const rateValue = ref(0);
const rateText = ref('');
</script>
<style lang="scss">
.rate-app-section {
    h4 {
        text-align: center;
        margin-bottom: 1rem;
    }
}
</style>