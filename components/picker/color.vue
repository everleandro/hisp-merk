<template>
    <div class="picker-color pa-3">
        <div class="picker-color__label">
            <label for="color-picker-input">{{ label }}</label>
        </div>
        <div class="picker-color__body">
            <input type="hidden" id="color-picker-input" />
            <div v-for="(color, key) in colors" v-ripple :key="key" :class="{
                [`${color}--text picker-color__item v-ripple-element`]: true,
                'picker-color__item--active': active(color),
            }" @click="model = color">
                <span></span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    colors: string[],
    label?: string,
    modelValue: string
}
const props = withDefaults(defineProps<Props>(), { label: 'Color' });
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
})
const active = (color: string) => {
    return model.value === color
}
</script>
<style lang="scss">
.picker-color {
    &__body {
        display: flex;
        gap: 4px;
    }

    &__label {
        margin-bottom: 12px;
    }

    &__item {
        --container-size: 40px;

        height: var(--container-size);
        width: var(--container-size);
        border-radius: 50%;
        padding: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: box-shadow 1.3ms ease-in;

        &--active {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
        }

        span {
            --size: calc(100% - 4px);
            width: var(--size);
            height: var(--size);
            display: block;
            background-color: currentColor;
            border-radius: 50%;

        }
    }
}
</style>