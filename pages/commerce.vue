<template>
    <div class="commerce-page">
        <div class="white">
            <div class="commerce-page__header">
                <e-bar class="commerce-bar" depressed>
                    <e-button :icon="$icon.arrowBack" small depressed class="white" color="secondary"
                        @click="$router.back()"></e-button>
                    <e-spacer></e-spacer>
                    <e-button :icon="$icon.hearth" small depressed class="white" color="secondary"></e-button>
                    <e-button :icon="$icon.share" small depressed class="white" color="secondary"></e-button>
                </e-bar>
                <img src="@/assets/images/commerce-bg.webp" alt="">
            </div>
            <e-row class="ma-0">
                <e-col cols="24">
                    <div class="d-flex align-center">
                        <h2>Panaderia Las delicias</h2>
                        <e-spacer></e-spacer>
                        <div class="d-flex justify-center align-center">
                            <e-button :icon="$icon.star" text color="yellow" />
                            <div>4.9</div>
                        </div>
                    </div>
                </e-col>
                <e-divider></e-divider>
                <e-col cols="24">
                    <h3>Vendedor</h3>
                    <card-seller />
                </e-col>
                <e-divider></e-divider>
            </e-row>
        </div>
        <div class="commerce-page__product-container">
            <div class="pa-3 align-center d-block mt-3 d-md-flex">
                <h2 class="mb-3">Productos</h2>
                <e-spacer></e-spacer>
                <e-textfield :prepend-icon="$icon.magnify" class="white mb-3"></e-textfield>
            </div>
            <e-row>
                <e-col v-for="i in 5" cols="24" sm="8" md="6" lg="4" :key="i">
                    <card-product />
                </e-col>
            </e-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
</script>

<style lang="scss">
.commerce-page {
    .e-bar .white {
        color: unset;
    }

    &__product-container {
        backdrop-filter: blur(10px);
    }

    &__header {
        position: relative;

        img {
            aspect-ratio: 16 / 14;
            width: 100%;
            object-fit: cover;
            top: 0;

            @include _from_sm {
                aspect-ratio: 3 / 1;
            }
        }
    }

    .commerce-bar {
        z-index: 1;
        backdrop-filter: blur(5px);
        position: absolute;
    }
}
</style>