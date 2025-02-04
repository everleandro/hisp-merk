<template>
    <li :class="classes">
        <div v-ripple="{ event: 'click' }" class="card-product__img" @click="showDetails">
            <img src="@/assets/images/product/6.jpg" alt="product image" />
        </div>
        <div class="card-product__text">
            <span class="card-product__title mb-3">Long Sleeve Dress</span>
            <span class="card-product__price">$ 45.00</span>
        </div>
    </li>
</template>
<script lang="ts" setup>
export interface Props {
    row?: boolean,
}
const props = withDefaults(defineProps<Props>(), { row: false })
const details = ref(false);

const classes = computed(() => {
    return {
        'card-product': true,
        'card-product--row': props.row,
    }
})
const emit = defineEmits<{
    (e: 'show:details', value: boolean): void
}>()

const showDetails = () => {
    emit('show:details', true);
}
</script>
<style lang="scss">
.card-product {
    display: flex;
    flex-direction: column;

    &__text {
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__price {
        font-weight: bold;
        display: block;
        flex: 1;
    }

    &__title {
        flex: 1;
        display: block;
        font-weight: 300;
        // font-size: 12px;
    }

    &__img {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        aspect-ratio: 3/4;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 200px;

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
    }

    &--row {
        flex-direction: row;

        .card-product__img {
            aspect-ratio: 1;
            height: 80px;

        }
    }

    @include mixin.from_sm {
        &__img {
            width: 100%;

        }
    }
}
</style>