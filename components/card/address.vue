<template>
    <li class="card-address pa-3 mx-3 my-6">
        <div class="card-address__info">
            <e-radio :is-active="active" class="flex-0" color="secondary" />
            <div class="flex-1 ml-3">
                <!-- <e-icon :icon="$icon.map" x-large /> -->
                <span class="title"><b>My Hoffice</b></span>
            </div>
            <e-button small text color="primary" class="btn--transparent">edit</e-button>
        </div>
        <div class="card-address__footer">
            <p>
                SBi building, street 3, software park
            </p>
        </div>
    </li>
</template>
<script lang="ts" setup>
export interface Props {
    active: boolean
}
defineProps<Props>()

</script>
<style lang="scss">
.card-address {
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    .flex-0 {
        flex: 0;
    }

    .flex-1 {
        flex: 1;
    }

    &__info {
        display: flex;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .title {
            flex: 1 1 auto;
        }
    }

    &__footer {

        p {
            margin: 0;
            opacity: .8;
            font-weight: 300;
            // text-align: center;
        }
    }
}
</style>