<template>
    <div class="cart-page">
        <e-row class="ma-0">
            <e-col v-for="i in 3" :key="i" cols="24" md="12" lg="8">
                <product-cart />
            </e-col>
        </e-row>
        <div class="mt-3 pa-3 cart-page__info">
            <div class="row my-4 px-3 d-flex">
                <span>Product Price</span>
                <e-spacer />
                <span>$110</span>
            </div>
            <e-divider />
            <div class="row my-4 px-3 d-flex">
                <span>Shipping</span>
                <e-spacer />
                <span>Freeship</span>
            </div>
            <e-divider />
            <div class="row my-4 px-3 d-flex">
                <span>Subtotal</span>
                <e-spacer />
                <span>$110</span>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div v-show="mounted" class="cart-page__footer pa-3">
                <e-button color="secondary" rounded block>proceed to checkout</e-button>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
export default { name: 'cart-page' }
</script>
<script lang="ts" setup>
import { AppBarType } from '~/types/bar';
useAppBar({ title: 'Your Cart' }, AppBarType.GO_BACK);
const mounted = ref(false)
const { setFooterConfig } = useFooter()

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 200)
    setFooterConfig({ show: false })
})

onBeforeRouteLeave((to) => {
    setFooterConfig({ show: true })
});

</script>
<style lang="scss">
.cart-page {
    &__info {
        .row {
            display: flex;
        }
    }

    &__footer {
        position: fixed;
        bottom: env(safe-area-inset-bottom, 0px);
        left: 0;
        right: 0;

    }
}
</style>