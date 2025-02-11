<template>
    <div class="pa-3">
        <ul>
            <card-voucher v-for="(voucher, key) in voucherList" :model-value="voucher" :key="key" />
        </ul>
    </div>
</template>
<script lang="ts" setup>
useProfile({ title: 'Voucher' });
const voucherList = [
    {
        title: 'Black Friday',
        description: 'Sale off 50%',
        percent: '50',
        code: 'friday sale',
        expiration_date: new Date()
    },
    {
        title: 'Holiday sale',
        description: 'Sale off 30%',
        percent: '30',
        code: 'holiday 30',
        expiration_date: new Date()

    },
    {
        title: 'First Order',
        description: '90% off your first order',
        percent: '90',
        code: 'welcome',
        expiration_date: new Date()
    }
] 
</script>