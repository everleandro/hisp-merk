<template>
    <div>
        <div class="card-seller pa-3">
            <div class="card-seller__header d-flex align-center">
                <img :src="user" />
                <div class="card-seller__header-info">
                    <span class="mb-3 seller-name"> Jhon Smith </span>
                    <span>Cocinero</span>
                </div>
                <e-spacer></e-spacer>
                <div>
                    <e-button :icon="$icon.message" text color="primary" />
                    <e-button :icon="$icon.phone" text color="primary" />
                </div>
            </div>
            <div class="card-seller__description pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid necessitatibus, libero inventore
                facilis architecto alias ut sed ab rem officiis fuga voluptates hic? Tenetur unde enim et ratione ullam.
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import user from "assets/images/user.png";
</script>
<style lang="scss">
.card-seller {
    background-color: var(--white);

    &__header {
        display: flex;
        align-items: center;

        &-info {
            display: flex;
            flex-direction: column;

            span {
                opacity: 0.7;
            }
        }

        img {
            aspect-ratio: 1;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .seller-name {
            font-weight: bold;
        }
    }

    &__description {
        font-size: 16px;
        color: var(--gray-dark);
        font-weight: normal;
    }
}
</style>