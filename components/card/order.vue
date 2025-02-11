<template>
    <e-card class="card-order pa-3">
        <div class="card-order__header d-flex mb-3">
            <h3>Order #1514</h3>
            <e-spacer />
            <span>13/25/2021</span>
        </div>
        <div class="card-order__body">
            <p class="tracking-number">
                <span class="mr-1">Tracking number: </span>
                <b>IK91237761292093</b>
            </p>
            <div class="d-flex">
                <p>
                    <span class="mr-1">Quantity: </span>
                    <b>2</b>
                </p>
                <e-spacer />
                <p>
                    <span class="mr-1">Subtotal:</span>
                    <b>2</b>
                </p>
            </div>
        </div>
        <div class="card-order__footer d-flex">
            <span class="success--text">DELIVERED</span>
            <e-spacer />
            <e-button small outlined rounded depressed to="/order/1">View details</e-button>
        </div>
    </e-card>
</template>
<style lang="scss">
.card-order {
    background-color: #fff;
    border-radius: 5px;
    flex: 1;

    &__header {
        flex: 1;
    }

    p {
        span {
            opacity: 0.9;
        }
    }

    &__footer {
        flex-grow: 1;
        align-items: center;
    }
}
</style>