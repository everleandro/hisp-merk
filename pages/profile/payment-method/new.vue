<template>
    <div class="payment-methods-section">
        <EDialog v-model="data.dialogModel" max-width="290">
            <EDatePicker v-model="card.exipiration_date" only-month close-on-change color="secondary" />
        </EDialog>
        <card-bank v-model="card" class="mt-3" />
        <e-form class="pa-3 ma-0 mt-4" retain-color color="secondary">
            <e-textfield v-model="card.name" placeholder="Card Holder" cols="24" />
            <e-textfield v-model="card.number" placeholder="Card Number" cols="24" limit="16" retain-color />
            <e-textfield :modelValue="formatDate(card.exipiration_date)" placeholder="Expires" cols="12" retain-color
                input-readonly @click="data.dialogModel = true" />
            <e-textfield v-model="card.cvv" placeholder="CVV" cols="12" retain-color color="secondary" limit="3" />
            <e-form-column>
                <e-button block rounded color="secondary" :loading="data.loading" @click="saveCard">Add Card</e-button>
            </e-form-column>
        </e-form>
    </div>
</template>
<script lang="ts" setup>
import type { CardBank } from '~/types/card-bank';
import { cardType } from '~/types/card-bank';
import { DateBuilder as UtilDate } from 'drocket';
const router = useRouter();

import { AppBarType } from '~/types/bar';
useAppBar({ title: 'New Payment Method' }, AppBarType.GO_BACK);

const data = reactive({
    dialogModel: false,
    loading: false,
})

const card = ref<CardBank>({
    name: '',
    exipiration_date: new Date(),
    number: '',
    alias: '',
    cvv: '',
    type: 'Visa' as cardType,
})
const formatDate = (date: Date | string): string => {
    return new UtilDate(date).format('month-MM/year-YYYY')
}
const saveCard = async () => {
    data.loading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    data.loading = false;
    router.push('/profile/payment-method');
}

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