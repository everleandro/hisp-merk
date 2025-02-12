<template>
    <div class="payment-methods-section">
        <e-bar depressed>
            <h1>Card Management</h1>
            <e-spacer />
            <e-button class="btn--transparent" text color="primary" to="/profile/payment-method/new"> add New
                +</e-button>
        </e-bar>
        <swiper :effect="'cards'" :grabCursor="true" :modules="[EffectCards]" class="bank-card-list">
            <swiper-slide v-for="(card, key) in cards" :key="key" class="pa-3">
                <card-bank :model-value="card" /></swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts" setup>
import type { CardBank } from '~/types/card-bank';

// import required modules
import { EffectCards } from 'swiper/modules';
useBarTemporary({ title: 'Payment Methods' });
const cards = [
    {
        name: 'John Doe',
        exipiration_date: '12/24',
        number: '**** **** **** 1234',
        type: 'Visa',
        alias: 'Nueva tarjeta',
    }, {
        name: 'Ever Leandro',
        exipiration_date: '12/24',
        number: '**** **** **** 1234',
        type: 'Visa',
        alias: 'Tarjeta de regalo',
    }, {
        name: 'Miguel Smith',
        exipiration_date: '12/24',
        number: '**** **** **** 1234',
        type: 'Visa',
        alias: 'Tarjeta de Credito',
    }
] as CardBank[]
</script>
<style lang="scss">
.payment-methods-section {
    .swiper {
        overflow: visible;
        height: auto;
    }

    .bank-card-list {
        overflow: hidden;
        max-width: 100%;
    }

    .card-bank {
        margin: auto;
    }

    .swiper-slide-shadow {
        display: none;
    }

    .swiper-slide {
        background-color: transparent
    }

}
</style>