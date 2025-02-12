<template>
    <div class="app-stepper__item">
        <e-icon :icon="$icon.checkOutline" class="mr-3" />
        <div class="d-flex align-baseline app-stepper__item-info">
            <span>parcel is succesfull delivery</span>
            <e-spacer />
            <span class="date"> 15 May 10:20</span>
        </div>
    </div>
</template>
<style lang="scss">
.app-stepper__item {
    display: flex;
    align-items: center;

    &-info {
        flex-grow: 1;
    }

    .date {
        font-size: 12px;
        opacity: .8;
    }
}
</style>