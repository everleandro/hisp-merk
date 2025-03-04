<template>
    <e-card v-ripple="{ event: 'click', color: '#bb182f' }" :class="classes">
        <div class="text-container">
            <h1 :class="textColor"> {{ title }}</h1>
            <p v-if="subtitle" :class="textColor">{{ subtitle }}</p>
        </div>
        <e-spacer></e-spacer>
        <img src="@/assets/images/product/5.png" alt="">
    </e-card>
</template>
<script lang="ts" setup>
export interface Props {
    title?: string,
    subtitle?: string,
    reverse?: boolean,
    squared?: boolean,
    smallTitle?: boolean,
    transparent?: boolean,
    color?: string,
    afterColor?: string,
}
const props = defineProps<Props>();
const classes = computed(() => {
    return {
        'card-offer pa-4 d-flex': true,
        [`${props.color}--text`]: !!props.color,
        "card-offer--reverse": props.reverse,
        "card-offer--squared": props.squared,
        "card-offer--transparent": props.transparent,
        "card-offer--small-title": props.smallTitle,
    }
})
const textColor = computed(() => {
    return props.color && !props.transparent ? 'white--text' : 'root-color--text'
})
</script>
<style lang="scss">
.card-offer {
    color: var(--white);
    user-select: none;
    position: relative;
    box-shadow: none;
    border-radius: 8px;
    overflow: hidden;
    justify-content: end;
    flex-direction: row-reverse;
    height: 200px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, currentColor 100%);

    &--transparent {
        background: transparent;
    }

    h1 {
        font-size: 2rem;
    }

    .text-container {
        z-index: 1;
        flex: 0 0 50%;
        max-width: 50%;

        p {
            margin-top: 16px;
            margin-bottom: 0;
            line-height: 1.4rem;
        }
    }

    img {
        object-fit: cover;
        top: 0;
        left: 0;
        height: 100%;
        position: absolute;
    }

    &--squared {
        border-radius: 0;
    }

    &--reverse {
        flex-direction: row;

        img {
            right: 0;
            left: unset;
        }
    }

    &--small-title {

        h1 {
            // font-size: 1.3rem;
            font-weight: lighter;
            white-space: nowrap;
        }
    }

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
</style>
