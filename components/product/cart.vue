<template>
    <li class="product-cart">
        <div v-ripple class="product-cart__img" @click="showDetails">
            <img src="@/assets/images/product/1.png" alt="product image" />
        </div>
        <span class="product-cart__price px-3">$ 45.00</span>
        <span class="product-cart__title"><e-checkbox v-model="checkbox" label="Long Sleeve Dress" /></span>
        <span class="product-cart__details d-flex align-center justify-center"> size: M | Color: white </span>
        <cart-quantity v-model="test" class="product-cart__actions" />
    </li>
</template>
<script lang="ts" setup>
useBarTemporary({ title: 'Your Cart' });
const router = useRouter()
const test = ref(1)
const checkbox = ref(true)
const showDetails = () => {
    // emit('show:details', true);
    router.push('/store/magestic-store/product/10')
}
</script>
<style lang="scss">
.product-cart {
    list-style: none;
    display: grid;
    grid-template-columns: 30% calc(45% - 24px) 25%;
    grid-template-areas: 'img title title' 'img price price' 'img details actions';
    grid-gap: 12px;
    $items: img, title, details, actions, price;
    max-height: 100%;

    @each $item in $items {
        &__#{$item} {
            grid-area: #{$item};
        }
    }

    &__details {
        font-size: 14px;
        opacity: .8;
    }

    &__price {
        font-size: x-large;
        font-weight: 500;
    }

    &__title {
        .e-field__slot {
            flex-direction: row-reverse;

            label {
                color: var(--root-color) !important;
            }
        }
    }

    &__img {
        color: var(--primary);
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        // aspect-ratio: 3/4;
        display: flex;
        align-items: center;
        flex-direction: column;

        &::before {
            content: "";
            background-color: currentColor;
            opacity: .12;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }

    img {
        height: 100%;
        object-fit: cover;
        max-height: 200px;
    }
}
</style>