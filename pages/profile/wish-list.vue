<template>
    <div class="pa-3">
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
useAppBar({ title: 'My Wish List' });
enum viewType {
    product = 1,
    commerce = 2
}
const store = reactive({
    view: viewType.product
})
</script>