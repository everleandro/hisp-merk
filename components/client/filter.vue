<template>
    <div class="client-filter">
        <div class="client-filter__search ma-2">
            <e-textfield v-model="filter.search" :prepend-icon="$icon.magnify" placeholder="Buscar..." />
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
                <div class="d-flex mb-3 align-center">
                    <h1 class="dialog-title mt-0"> Filtros</h1>
                    <e-spacer></e-spacer>
                    <e-button :icon="$icon.exit" text @click="dialog = false" />
                </div>
                <div>
                    <e-form>
                        <e-select v-model="filter.category" :items="availbableCategories" cols="24" />
                        <e-form-column cols="6" class="align-center">
                            <span class="pl-3">Precio:</span>
                        </e-form-column>
                        <e-textfield v-model="filter.min" prefix="min" cols="9" />
                        <e-textfield v-model="filter.max" prefix="max" cols="9" />
                        <e-checkbox v-model="filter.news" hide-overlay label="Novedades"
                            detail="Productos nuevos o recién añadidos." cols="24" />
                        <e-checkbox v-model="filter.popularity" hide-overlay label="Popularidad"
                            detail="Productos más vendidos o mejor valorados.." cols="24" />
                    </e-form>
                </div>
                <div class="d-flex justify-flex-end full-width mt-3">
                    <e-button color="primary" text @click="dialog = false">close</e-button>
                </div>
            </div>
        </e-dialog>
    </div>
</template>
<script lang="ts" setup>
import { switchType } from '~/components/switch-button.vue'
import { ProductCategory } from '~/types'
export interface Props {
    view: switchType
}
const props = withDefaults(defineProps<Props>(), { view: switchType.option1 })

const dialog = ref(false)
const availbableCategories = [{ text: 'All', value: -1 }, ...Object.values(ProductCategory).map((value) => ({ text: value, value }))]
const filter = reactive({
    search: '',
    category: -1,
    min: '',
    max: '',
    popularity: false,
    news: false,
})

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

    @include mixin.from_sm {
        flex-direction: row;
    }

    &__search {
        flex: 1;
        background-color: var(--white);
    }
}
</style>