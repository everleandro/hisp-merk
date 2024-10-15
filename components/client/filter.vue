<template>
    <div class="client-filter">
        <div class="client-filter__search ma-2">
            <e-textfield :prepend-icon="$icon.magnify" placeholder="Buscar..." />
        </div>
        <div class="d-flex">
            <div class="client-filter__options ma-2">
                <e-button text :prepend-icon="$icon.filter" class="white" color="gray-dark" @click="dialog = !dialog">
                    Filtros
                </e-button>
            </div>
            <e-spacer></e-spacer>
            <switch-button :model-value="view" class="ma-2" @update:model-value="switchView" />
        </div>
        <e-dialog v-model="dialog" max-width="500">
            <div class="pa-4">
                <h1 class="dialog-title mt-0 mb-3"> Dialog title</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure unde beatae
                    reiciendis animi consequatur corrupti, enim ipsum. Libero dignissimos maxime
                    assumenda, deleniti eaque adipisci dolore possimus. Adipisci suscipit deserunt iste.
                </p>
                <div class="d-flex justify-flex-end full-width">
                    <e-button color="primary" text @click="dialog = false">close</e-button>
                </div>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'

export interface Props {
    view: switchType
}

const props = withDefaults(defineProps<Props>(), { view: switchType.option1 })
const dialog = ref(false)


const emit = defineEmits<{
    (e: 'update:view', value: switchType): void
}>()

const switchView = (type: switchType) => {
    emit('update:view', type)
}

</script>
<style lang="scss">
.client-filter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column-reverse;

    @include _from_sm {
        flex-direction: row;
    }

    &__search {
        flex: 1;
        background-color: var(--white);
    }
}
</style>