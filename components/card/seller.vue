<template>
    <div>
        <div class="card-seller pa-3">
            <div class="card-seller__header d-flex align-center">
                <img :src="user" />
                <div class="card-seller__header-info">
                    <span class="mb-2 seller-name"> Jhon Smith </span>
                    <span>Cocinero</span>
                </div>
                <e-spacer></e-spacer>
                <div>
                    <e-button :icon="$icon.message" text color="primary" link href="sms:+2705328993"/>
                    <e-button :icon="$icon.phone" text color="primary" link href="tel:+2705328993"/>
                </div>
            </div>
            <div class="card-seller__description pt-3">
                Vienvenidos a mi rincon digital Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid
                necessitatibus, libero inventore
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
            --size: 60px;
            aspect-ratio: 1;
            width: var(--size);
            height: var(--size);
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