<template>
    <div class="card-commerce">
        <div v-ripple="{ event: 'click' }" class="card-commerce__header" @click="goToCommerce()">
            <img src="@/assets/images/tabaco.webp" alt="">
            <h2>Backery</h2>
        </div>
        <div class="card-commerce__body">
            <div class="card-commerce__description px-3 pt-2">
                <p>PANADERÍA DE TRADICIÓN ARTESANAL</p>
                <img src="assets/images/commerce-logo.png" width="66" height="66" alt="">
            </div>
        </div>
        <div class="card-commerce__footer px-1 pb-1">
            <e-button text :icon="$icon.hearth" small color="primary" />
            <h3>commerce Name</h3>
        </div>
    </div>
</template>
<script lang="ts" setup>
const router = useRouter()
const goToCommerce = () => {
    router.push('/commerce')
}
</script>
<style lang="scss" scoped>
.card-commerce {
    border-radius: 1.5px;
    background: white;
    box-shadow: 2px 2px 5px 0 rgba(0, 29, 44, 0.2);

    &__header {
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
        aspect-ratio: 3 / 1;
        position: relative;

        h2 {
            position: absolute;
            bottom: 4px;
            left: 12px;
            text-transform: uppercase;
            color: var(--white);
        }

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
        }
    }

    &__description {
        align-items: center;
        position: relative;

        p {
            font-size: 12px;
            color: var(--gray-dark);
            font-weight: normal;
            padding-right: 90px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        img {
            width: 66px;
            height: 66px;
            right: 16px;
            top: 0;
            margin-top: -16px;
            border: 4px solid var(--white);
            position: absolute;

            @include mixin.from_sm {
                right: 35px;
            }
        }
    }

    &__footer {
        display: flex;
        align-items: center;

        h3 {
            font-size: 14px;
            font-weight: bold;
            color: var(--gray-dark);
            margin-left: 12px;
            text-transform: uppercase;
        }
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // mask-image: linear-gradient(black 30%, transparent);
    // background: red;
}
</style>