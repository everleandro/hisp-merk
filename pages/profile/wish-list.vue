<template>
    <div class="pa-3 whish-list-page">
        <app-switch v-model="store.view" :true-value="viewType.product" :false-value="viewType.commerce"
            true-text="product" false-text="commerce" class="pa-3 mb-6" />
        <e-window v-model="store.view">
            <e-window-item :value="viewType.product">
                <e-row>
                    <e-col v-for="i in 12" :key="i" cols="12" md="6" lg="4" xl="3">
                        <product-card />
                    </e-col>
                </e-row>
            </e-window-item>
            <e-window-item :value="viewType.commerce">
                <e-row>
                    <e-col v-for="i in 12" :key="i" cols="24" md="12" lg="4" xl="3">
                        <commerce-card />
                    </e-col>
                </e-row>
            </e-window-item>
        </e-window>
    </div>
</template>
<script lang="ts" setup>
import { AppBarType } from '~/types/bar';
useAppBar({ title: 'My Wish List' }, AppBarType.GO_BACK);
enum viewType {
    product = 1,
    commerce = 2
}
const store = reactive({
    view: viewType.product
})
</script>
<style lang="scss">
.whish-list-page {
    .app-switch {
        position: sticky;
        position: sticky;
        top: 47px;
        z-index: 1;
        background-color: var(--white);
    }
}
</style>