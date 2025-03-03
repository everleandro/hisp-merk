<template>
    <div class="pa-3">
        <app-message :append-icon="$icon.onTheWay" title="Your Order is on the way" color="secondary" transparent
            @click="router.push('/order/1/track')">
            Click here to track your order
        </app-message>
        <card-order-detail class="my-6" :model-value="details" />
        <card-order-detail :items="items" />
        <div class="my-12 d-flex">
            <e-button rounded to="/home" color="secondary" block>Continue Shopping</e-button>
        </div>
    </div>
</template>
<script lang="ts">
export default { name: 'order-detail' }
</script>
<script lang="ts" setup>
import type { OrderItemInterface } from '@/types/order'
import { AppBarType } from '~/types/bar';
const route = useRoute()
const router = useRouter()
const { appBar } = useAppBar({ title: 'Payment Methods' }, AppBarType.GO_BACK);
const { items, ...details } = {
    number: 1514,
    tracking_number: 'IK123894901231',
    delivery_address: 'SBI Prospector ct, 42101',
    items: <OrderItemInterface[]>[
        { amount: 1, name: 'Maxi Dress', price: '68.00' },
        { amount: 1, name: 'Pixel Rytrf', price: '48.00' },
        { amount: 1, name: 'Triounds', price: '64.00' },
        { amount: 1, name: 'Line Dress', price: '35.00' },
    ]
}

onNuxtReady(() => {
    appBar.value.title = `Order #${route.params.id}`;
});
</script>