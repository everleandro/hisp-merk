<template>
    <div>
        <div class="d-flex order-page__header">
            <h1 class="secondary--text">Mis pedidos</h1>
            <e-spacer></e-spacer>
            <e-textfield :prepend-icon="$icon.magnify" retain-color class="white"></e-textfield>
        </div>
        <e-row>
            <e-col v-for="i in 5" :key="i" cols="24">
                <card-order />
            </e-col>
        </e-row>
    </div>
</template>
<style lang="scss">
.order-page {
    &__header {
        padding: 16px;
        align-items: center;

        @include _xs {
            flex-direction: column;

            .e-field {
                width: 100%;
            }

            h1 {
                margin-bottom: 12px;
                align-self: baseline;
            }
        }
    }
}
</style>