<template>
    <div class="card-product">
        <div class="card-product__header">
            <e-button small :icon="$icon.fav" text color="primary"></e-button>
            <img src="https://via.placeholder.com/300" alt="product image" />
        </div>
        <div class="card-product__body px-3 pt-3">
            <h3>Tortilla de aceite</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aliquid similique voluptates repellat quia rerum ducimus itaque. Delectus, amet!
                Cupiditate in officia cum voluptatem iste exercitationem, consequatur distinctio incidunt deleniti
                explicabo.</p>
            <e-spacer></e-spacer>
            <span class="card-product__price">$100</span>
            <div class="card-product__actions py-3">

                <e-button color="primary" x-small depressed block>añadir al carrito</e-button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.card-product {
    border-radius: 1.5px;
    background: white;
    box-shadow: 2px 2px 5px 0 rgba(0, 29, 44, 0.2);
    display: flex;
    flex-wrap: wrap;
    color: var(--secondary);
    border-radius: 4px;

    &__header {
        position: relative;
        width: 40%;
        display: flex;
        align-items: center;
        background-color: rgba(100, 100, 100, 0.1);

        .e-btn {
            position: absolute;
            top: 4px;
            left: 4px;
        }

        img {
            aspect-ratio: 1;
            width: 100%;
        }
    }

    &__price {
        font-size: 1.2rem;
        font-weight: bold;
    }

    &__actions {
        flex: 1;
        min-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__body {
        flex: 1;
        display: flex;
        flex-direction: column;

        h3 {
            text-transform: capitalize;
            font-weight: normal;
            font-size: 1rem;
        }

        p {
            line-height: normal;
            opacity: .5;
            font-size: 0.9rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            /* number of lines to show */
            line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }

    @include _from_sm {
        &__header {
            width: 100%;
            aspect-ratio: 9 / 10;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>