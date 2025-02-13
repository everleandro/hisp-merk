<template>
    <div class="picker-size pa-3">
        <div class="picker-size__label">
            <label for="picker-size-input">{{ label }}</label>
        </div>
        <div class="picker-size__body">
            <input type="hidden" id="picker-size-input" />
            <div v-for="(size, key) in sizes" v-ripple :key="key" :class="{
                [`${color}--text picker-size__item v-ripple-element`]: true,
                'picker-size__item--active': active(size),
            }" @click="model = size">
                <span><span>{{ size }}</span></span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    sizes: string[],
    label?: string,
    color?: string,
    modelValue: string
}
const props = withDefaults(defineProps<Props>(), { label: 'Size', color: 'secondary' });
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: string) => emit('update:modelValue', value)
})
const active = (size: string) => {
    return model.value === size
}
</script>
<style lang="scss">
.picker-size {
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


        &--active {
            &>span {
                background-color: currentColor;

                span {
                    color: var(--white);
                }
            }
        }

        &>span {
            --size: calc(100% - 4px);
            width: var(--size);
            height: var(--size);
            display: block;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            transition: background-color .3s ease-in;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .7rem;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-color: currentColor;
                opacity: .2;
            }

        }
    }
}
</style>