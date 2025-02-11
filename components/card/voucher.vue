<template>
    <li class="card-voucher my-6">
        <div class="card-voucher__percent-container">
            <span :class="percentBoxClass">{{ modelValue.percent }} %</span>
        </div>
        <div class="card-voucher__body">
            <p class="title">Black Friday</p>
            <p class="description">Sale off 50%</p>
            <p class="code">Code: friday sale</p>
        </div>
        <div class="expiration-date pa-3">
            <span>Exp.</span>
            <e-spacer />
            <span>20</span>
            <span>Dec</span>
        </div>
    </li>
</template>
<script lang="ts" setup>
export interface Voucher {
    title: string;
    description: string;
    percent: string | number;
    code: string;
    expiration_date: Date;
}
const props = defineProps<{ modelValue: Voucher }>()

const percentBoxClass = computed(() => {
    return {
        'percent-bx': true,
        [`percent-bx--${props.modelValue.percent}`]: true,
        'white--text': parseInt(props.modelValue.percent as string) > 50
    }
})

</script>
<style lang="scss">
.card-voucher {
    display: flex;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);

    &__body {
        padding: 12px;
        flex: 1;
        display: flex;
        flex-direction: column;

        p {
            margin: 0;
            min-height: 26px;
        }
    }

    &__percent-container {
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .expiration-date {
        border-left: 2px dashed var(--gray);
        display: flex;
        flex-direction: column;
        font-size: .7rem;
        align-items: center;
    }

    .percent-bx {
        position: relative;
        padding: 12px;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: x-large;
        aspect-ratio: 1;

        &::before {
            content: '';
            z-index: -1;
            background-color: var(--secondary);
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        @for $i from 1 through 100 {
            &--#{$i} {
                &::before {
                    opacity: $i * 0.01;
                }
            }
        }
    }

    .description {
        font-size: .7rem;
        font-weight: 400;
        opacity: 0.7;
        flex: 1;
        display: flex;
        align-items: center;
    }

    .code {
        font-size: .9rem;
    }

    .title {
        font-size: 1rem;
        font-weight: bold;
    }

}
</style>