<template>
    <div class="cart-page pa-3 secondary--text">
        <div class="cart-page__header">
            <h1>Cesta</h1>
            <div class="cart-page__header-info">
                <p class="mb-0">12 articulos | Total: $2000</p>
            </div>
        </div>
        <div class=" d-flex cart-page__check-out">
            <e-spacer></e-spacer>
            <e-button :color="viewport.xs ? 'secondary' : 'primary'" small :block="viewport.xs">Proceder al
                pago</e-button>
        </div>
        <!-- <e-row>
            <e-col cols="24" md="16"> -->
        <ul>
            <card-cart v-for="i in 10" :key="i" />
        </ul>
        <!-- </e-col>
            <e-col cols="24" md="8">
                <div class="cart-page__summary white pa-3">
                    <h2>Resumen</h2>
                    <e-divider class="my-3" />
                    <div class="cart-page__summary-info">
                        <div>
                            <p>Subtotal: </p>
                            <p>$2000</p>
                        </div>
                        <e-divider></e-divider>
                        <div>
                            <p>Envio: </p>
                            <p>$2000</p>
                        </div>
                        <e-divider></e-divider>
                        <div>
                            <p>Total: </p>
                            <p>$2000</p>
                        </div>
                    </div>
                    <e-divider class="mb-3" />
                    <e-button color="primary" block>Proceder al pago</e-button>
                </div>
            </e-col>
        </e-row> -->
    </div>
</template>
<script lang="ts" setup>
import { useBreakpoint } from 'drocket';

const { viewport } = useBreakpoint()
</script>
<style lang="scss">
.cart-page {
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        @include mixin.xs {
            flex-direction: column;
            margin-bottom: 40px;
        }
    }

    &__check-out {
        margin-bottom: 48px;

        @include mixin.xs {
            margin-bottom: 0;
            padding: 8px 0;
            background: rgba(255, 255, 255, .5);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 12px;
        }
    }

    &__summary {
        &-info {
            div {
                display: flex;
                justify-content: space-between;

                p {
                    font-size: 1.2rem;

                    &:first-child {
                        opacity: 0.7;
                    }
                }
            }
        }
    }

    &__header-info {
        p {
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
}
</style>