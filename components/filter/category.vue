<template>
    <ol :class="classes">
        <li v-for="(category, key) in categories" :key="key" class="filter-category__item pa-1"
            :class="active(category.id) && 'filter-category__item--active'" @click="handleCategoryClick(category.id)">
            <div class="button-wrapper">
                <e-button text x-large>
                    <app-icon :icon="category.icon" x-large></app-icon>
                </e-button>
            </div>
            <span class="item__text">{{ category.title }}</span>
        </li>
    </ol>
</template>
<script lang="ts" setup>
import appIcons from '~/constants/app-icon';
import { Category } from '~/types';
export interface Props {
    modelValue?: Category,
    inline?: boolean
    grid?: boolean
}

const props = withDefaults(defineProps<Props>(), { modelValue: Category.All })

const emit = defineEmits<{
    (e: 'update:modelValue', value: Category): void,
    (e: 'click:category', value: string | number | null): void,
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: Category) => emit('update:modelValue', value)
})

const active = (id: Category) => {
    return model.value === id
}
const classes = computed(() => ({
    'filter-category': true,
    'filter-category--inline scrollbar--hidden': props.inline,
    'filter-category--grid': props.grid
}))
const handleCategoryClick = (id: Category) => {
    emit('click:category', id)
    model.value = id
}
const categories = [
    { icon: appIcons.breckfast, title: "Breakfast", id: Category.Breakfast },
    { icon: appIcons.clothes, title: "Clothes", id: Category.Clothes },
    { icon: appIcons.coffe, title: "Coffe", id: Category.Coffe },
    { icon: appIcons.fastFood, title: "Fast Food", id: Category.FastFood },
    { icon: appIcons.home, title: "Home", id: Category.Home },
    { icon: appIcons.meat, title: "Meat", id: Category.Meat },
    { icon: appIcons.pizza, title: "Pizza", id: Category.Pizza },
]

</script>
<style lang="scss">
.filter-category {
    display: flex;
    max-width: 100%;

    &--inline {
        justify-content: space-between;
        overflow-x: auto;

        .filter-category__item {
            &:not(:first-child) {
                margin-left: 24px;
            }

            &:first-child {
                margin-left: 12px;
            }

            &:last-child {
                margin-right: 12px;
            }
        }
    }

    &--grid {
        justify-content: flex-start;
        overflow-x: auto;
        flex-wrap: wrap;
        align-items: flex-start;

        .filter-category__item {
            flex: 0 0 33.3333%;
            min-height: 129px;

            .e-btn {
                width: 84px;
                height: 84px;

                .e-icon--size-x-large {
                    font-size: 60px;
                }
            }

            .item__text {
                font-size: medium;
                margin-top: 4px;

            }
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0;



        .item__text {
            color: currentColor;
            font-size: small;
            margin-top: 12px;
        }

        .button-wrapper {
            padding: 3px;
            border-radius: 12px;
            border-color: rgba(0, 0, 0, .1);
        }

        .e-btn {
            height: 60px;
            padding: 0;
            width: 60px;
            border-radius: 12px;

            &:before {
                opacity: 0.15;
            }
        }

        &--active {
            color: var(--primary);

            .e-btn {
                color: var(--primary) !important;
                color: white;

                &::before {
                    opacity: .2;
                }
            }
        }


    }
}
</style>