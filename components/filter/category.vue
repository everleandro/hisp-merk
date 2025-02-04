<template>
    <ol class="filter-category">
        <li v-for="(category, key) in categories" :key="key" class="filter-category__item pa-1"
            :class="active(category.id) && 'filter-category__item--active'" @click="model = category.id">
            <div class="button-wrapper">
                <e-button :icon="category.icon" depressed small />
            </div>
            <span class="item__text">{{ category.title }}</span>
        </li>
    </ol>
</template>
<script lang="ts" setup>
import icons from '~/constants/icons';
import { Category } from '~/types';
export interface Props {
    modelValue: Category
}
const props = withDefaults(defineProps<Props>(), { modelValue: Category.All })

const emit = defineEmits<{
    (e: 'update:modelValue', value: Category): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: Category) => emit('update:modelValue', value)
})
const active = (id: Category) => {
    return model.value === id
}

const categories = [
    { icon: icons.mirror, title: "Beauty", id: Category.Beauty },
    { icon: icons.glasses, title: "Accesories", id: Category.Accesories },
    { icon: icons.male, title: "Man", id: Category.Man },
    { icon: icons.female, title: "Women", id: Category.Women },
]

</script>
<style lang="scss">
.filter-category {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    max-width: 100%;

    &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0;

        &:not(:first-child) {
            margin-left: 24px;
        }

        &:first-child {
            margin-left: 12px;
        }

        &:last-child {
            margin-right: 12px;
        }

        .item__text {
            color: currentColor;
            font-size: small;
            margin-top: 12px;
        }

        .button-wrapper {
            padding: 3px;
            border-radius: 9999px;
            border: 1px solid;
            border-color: rgba(0, 0, 0, .1);
        }

        &--active {
            color: var(--primary);

            .button-wrapper {
                border-color: currentColor;
            }

            .e-btn {
                background-color: var(--primary);
                color: white;
            }
        }

        .e-btn {
            &:before {
                opacity: 0.05;
            }
        }
    }
}
</style>