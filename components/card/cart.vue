<template>
    <li class="card-cart white">
        <div class=" card-cart__header d-flex justify-center align-center">
            <img src="@/assets/images/product-default.png" alt="">
        </div>
        <div class="card-cart__container">
            <div class="d-flex">
                <div>
                    <h4>Producto espectacular de pan</h4>
                    <p>Descripcion del producto</p>
                </div>
                <e-spacer />
                <div>
                    <p class="card-cart__price ma-0">$1000</p>
                </div>
            </div>
            <e-spacer />
            <e-divider class="my-3" />
            <div class="card-cart__actions">
                <e-spacer class="d-none d-md-block" />
                <cart-quantity v-model="quantity" />
                <e-spacer class="d-block d-md-none" />
                <e-button text x-small color="secondary" class="ml-3">Eliminar</e-button>
            </div>
        </div>
    </li>
</template>
<script lang="ts" setup>
const quantity = ref(0)
</script>
<style lang="scss">
.card-cart {
    display: flex;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
    flex-direction: column;

    @include _from_sm {
        flex-direction: row;
    }

    img {
        width: 140px;
        height: 140px;
        border-radius: 8px;
        object-fit: cover;
        margin-bottom: 16px;

        @include _from_sm {
            margin-right: 16px;
        }
    }

    h4 {
        text-transform: uppercase;
    }

    &__container {
        flex: 1;
        display: flex;
        flex-direction: column;

        @include _xs {
            &>div.d-flex {
                flex-direction: column;

                h4,
                p {
                    text-align: center;
                }
            }
        }
    }

    &__price {
        font-size: 1.5rem;
        font-weight: 600;


    }

    &__actions {
        display: flex;

        e-button {
            margin-right: 8px;
        }
    }
}
</style>