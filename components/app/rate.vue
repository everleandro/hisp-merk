<template>
    <div class="rate">
        <div class="rate__container">
            <e-button v-for="i in 5" :key="i" :icon="$icon.star" text small @click="model = i" :color="getColor(i)" />
        </div>
    </div>
</template>
<script lang="ts" setup>

export interface Props {
    modelValue: number,
    color?: string
}
const props = withDefaults(defineProps<Props>(), { modelValue: 0, color: 'primary' })
const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
}>()

const model = computed({
    get: () => props.modelValue,
    set: (value: number) => emit('update:modelValue', value)
})
const getColor = (i: number) => i <= model.value ? props.color : 'gray'
</script>
<style lang="scss">
.rate {
    &__container {
        display: flex;
        gap: 5px;
        justify-content: center;

        .e-btn {
            margin: 0;
        }
    }
}
</style>