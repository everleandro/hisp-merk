<template>
    <e-card class="card-order-details pa-3">
        <template v-if="modelValue">
            <div class="details-row">
                <span>Order Number</span>
                <e-spacer></e-spacer>
                <span class="black--text">{{ modelValue.number }}</span>
            </div>
            <div class="details-row">
                <span>Tracking Number</span>
                <e-spacer></e-spacer>
                <span class="black--text">{{ modelValue.tracking_number }}</span>
            </div>
            <div class="details-row">
                <span>Delivery Address</span>
                <e-spacer></e-spacer>
                <span class="black--text">{{ modelValue.delivery_address }}</span>
            </div>
        </template>
        <template v-if="(items || []).length > 0">
            <div v-for="(item, i) in items" :key="i" class="details-row">
                <span>{{ item.name }}</span>
                <e-spacer></e-spacer>
                <span class="black--text">X{{ item.amount }}</span>
                <span class="black--text price">$ {{ item.price }}</span>
            </div>
            <div class="details-row mt-3">
                <span>Sub Total</span>
                <e-spacer></e-spacer>
                <span class="black--text">$120.00</span>
            </div>
            <div class="details-row">
                <span>Shipping</span>
                <e-spacer></e-spacer>
                <span class="black--text">$0.00</span>
            </div>
            <e-divider></e-divider>
            <div class="details-row mt-3">
                <span>Total</span>
                <e-spacer></e-spacer>
                <span class="black--text">$120.00</span>
            </div>
        </template>
    </e-card>
</template>
<script lang="ts" setup>
import type { OrderItemInterface, OrderInterface } from '@/types/order'
export interface Props {
    modelValue?: OrderInterface,
    items?: OrderItemInterface[]
}
const props = defineProps<Props>()
</script>
<style lang="scss">
.card-order-details {
    .details-row {
        display: flex;
        flex: 1 1 100%;

        .price {
            min-width: 80px;
            text-align: right;
        }

        &:not(:last-child) {
            margin-bottom: 12px;
        }

        span {
            font-size: 12px;
        }
    }
}
</style>