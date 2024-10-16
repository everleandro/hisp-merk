<template>
    <div class="card-order">
        <div class="card-order__body">
            <div class="product-image">
                <img src="@/assets/images/product-default.png" />
            </div>
            <div class="product-info">
                <h2>Producto Especial De mantequilla</h2>
                <p><span>Estado: </span> <span class="text--bold">Preparado</span> </p>
                <p>
                    <span>Precio: </span>
                    <span class="price">$ 100.00</span>
                </p>
            </div>
            <div class="card-order__actions">
                <e-button small color="primary">Comprar nuevamente</e-button>
                <e-button small color="primary">Evaluar vendedor</e-button>
            </div>
        </div>
        <div class="card-order__details">
            <e-divider></e-divider>
            <e-expansion color="secondary" header-title="Detalles del pedido">
                <div class="secondary--text">
                    <div class="row-info">
                        <p class="row-info__label">
                            Nº PEDIDO
                        </p>
                        <p class="row-info__text">1299</p>
                    </div>
                    <div class="row-info">
                        <p class="row-info__label">
                            Cantidad
                        </p>
                        <p class="row-info__text">4</p>
                    </div>
                    <div class="row-info">
                        <p class="row-info__label">
                            FECHA Y HORA DE ENTREGA
                        </p>
                        <p class="row-info__text">Jueves 01 de Octubre, 16:00h</p>
                    </div>
                    <div class="row-info">
                        <p class="row-info__label">
                            DIRECCIÓN
                        </p>
                        <p class="row-info__text">Carrer Poeta Miguel Hernandez, 67, 03201, Elx, Alicante</p>
                        <e-icon :icon="$icon.map" class="ml-3"></e-icon>
                    </div>
                </div>
            </e-expansion>
        </div>

    </div>
</template>
<style lang="scss">
.card-order {
    box-shadow: 2px 2px 6px 0 rgba(0, 29, 44, 0.2);
    background-color: #fff;
    border-radius: 5px;
    color: var(--secondary);

    .e-expansion {
        box-shadow: none;
        border-radius: 0;
    }

    .product-image {
        padding-right: 12px;

        img {
            height: 100px;
        }
    }

    &__details {

        .row-info {
            display: flex;
            justify-content: space-between;
            padding: 12px;

            &:not(:last-child) {
                border-bottom: 1px solid var(--gray-light);
            }

            &__label {
                text-transform: uppercase;
                font-size: 14px;
                color: var(--gray-dark);
                opacity: 0.7;
            }

            &__text {
                font-size: 14px;
                font-weight: 500;
                text-align: end;
            }

            p {
                flex: 50%;
                margin: 0;
            }
        }
    }

    .product-info {
        flex: 1;

        h2 {
            font-weight: 500;
        }

        .text--bold {
            font-weight: 500;
            text-transform: uppercase;
        }

        .price {
            font-size: 1.5rem;
        }

        p {
            margin: 0;
        }

        h2,
        p {


            @include _xs {
                text-align: center;
            }
        }
    }

    &__body {
        display: flex;
        padding: 12px;

        @include _xs {
            flex-direction: column;
            align-items: center;
        }
    }

    &__actions {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        @include _xs {
            flex-grow: 1;
            width: 100%;
        }

        .e-btn {
            margin-bottom: 12px;
            margin-left: 0;

            @include _from_sm {
                margin: 0;
            }
        }
    }

    &__subtitle {
        font-size: 14px;
        color: var(--gray-dark);
        opacity: 0.7;
    }
}
</style>