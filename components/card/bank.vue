<template>
    <e-card class="card-bank white--text pa-3">
        <div class="card-bank__header">
            <e-icon :icon="$icon.visa" class="card-bank__header-icon" />
        </div>
        <div class="card-bank__body">
            <p>{{ cardFormatter(modelValue.number).formattedCard || '**** **** **** ****' }}</p>
        </div>
        <div class="card-bank__footer d-flex">
            <div class="card-bank__footer__name">
                <p>CARD HOLDER NAME</p>
                <p>{{ modelValue.name || 'card Holder name' }}</p>
            </div>
            <div class="card-bank__footer__date">
                <p>VALID THRU</p>
                <p>{{ expiationDate || 'MM/YY' }}</p>
            </div>
        </div>
    </e-card>
</template>
<script lang="ts" setup>
import svg from '~/constants/app-icon';
import type { CardBank } from '~/types/card-bank';
const cardFormatter = useCardFormatter;
const props = defineProps<{ modelValue: CardBank }>()
import { DateBuilder as UtilDate } from 'drocket';

const expiationDate = computed(() => {
    if (props.modelValue.exipiration_date instanceof Date) {
        return new UtilDate(props.modelValue.exipiration_date).format('month-MM/year-YYYY')
    } else {
        return props.modelValue.exipiration_date
    }
})


</script>
<style lang="scss">
.card-bank {
    background-image: url('@/assets/images/bg-bank-card.png');
    background-repeat: no-repeat;
    background-position: -18px 0px;
    max-width: 320px;
    aspect-ratio: 27/17;


    &>div {
        flex: 1 1 100%;
    }

    p {
        margin: 0;
    }

    &__header {
        display: flex;
        justify-content: flex-end;
    }

    &__body {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: x-large;
        display: flex;
        align-items: flex-end;
    }

    &__footer {
        font-size: small;



        &__name {
            flex: 1 1 70%;
            text-align: left;
        }

        &__date {
            flex: 1 1 30%;
            text-align: right;
        }
    }
}
</style>